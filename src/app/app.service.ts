import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import {Upload} from './upload';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable()
export class AppService {
  title;
  desc;
  warning;
  rows;

  constructor(private af: AngularFireStorage, private db: AngularFireDatabase) {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> this.rows = Math.floor(length/5) + 1);
  }

  private basePath:string = '/events';
  uploads: FirebaseListObservable<Upload[]>;


  pushUpload(upload: Upload) {
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
        upload.descr = this.desc;
        this.saveFileData(upload);
        console.log(upload.url);
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
