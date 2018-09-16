import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import {Photo} from './photo';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable()
export class UploadphotoService {
  title;
  desc;

  constructor(private af: AngularFireStorage, private db: AngularFireDatabase) { }

  private basePath:string = '/photos';
  uploads: FirebaseListObservable<Photo[]>;

  pushUpload(upload: Photo) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);


    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        upload.title = this.title;
        this.saveFileData(upload);
        console.log(upload.url);
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Photo) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
