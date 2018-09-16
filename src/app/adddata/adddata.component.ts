import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';
import { Upload } from '../upload';
import { Photo} from '../photo';
import { AppService } from '../app.service';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {UploadphotoService} from '../uploadphoto.service';


@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  submitted = false;
  title;
  desc;
  events1: AngularFireList<any>;
  events: Observable<any[]>;
  courses1: AngularFireList<any>;
  courses: Observable<any[]>;
  activities1: AngularFireList<any>;
  activities: Observable<any[]>;
  photos1: AngularFireList<any>;
  photos: Observable<any[]>;

  selectedFiles: FileList;
  currentUpload: Upload;
  addevents = false;
  addcourse = true;
  addphotos = false;
  addactivities = false;




  ngOnInit() {
    // this.downloadURL = this.storage.ref('/users/davideast.png').getDownloadURL();
  }

  constructor( public db: AngularFireDatabase, private storage: AngularFireStorage, private upSvc: AppService , private  upPhoto: UploadphotoService) {


    db.object('/events').snapshotChanges().map(action => {
      const $key = action.payload.key;
      this.events1 = db.list('/events');
      this.events = this.events1.valueChanges();
      this.events = this.events1.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      const data = { $key, ...action.payload.val() };
      return data;
    }).subscribe();

    db.object('/courses').snapshotChanges().map(action => {
      const $key = action.payload.key;
      this.courses1 = db.list('/courses');
      this.courses = this.courses1.valueChanges();
      this.courses = this.courses1.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      const data = { $key, ...action.payload.val() };
      return data;
    }).subscribe();

    db.object('/activities').snapshotChanges().map(action => {
      const $key = action.payload.key;
      this.activities1 = db.list('/activities');
      this.activities = this.activities1.valueChanges();
      this.activities = this.activities1.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      const data = { $key, ...action.payload.val() };
      return data;
    }).subscribe();

    db.object('/photos').snapshotChanges().map(action => {
      const $key = action.payload.key;
      this.photos1 = db.list('/photos');
      this.photos = this.photos1.valueChanges();
      this.photos = this.photos1.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      const data = { $key, ...action.payload.val() };
      return data;
    }).subscribe();

  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  addEvents()
  {

    this.addevents = true;
    this.addactivities = false;
    this.addcourse =false;
    this.addphotos = false;
  }
  addActivities()
  {
    this.addactivities = true;
    this.addevents = false;
    this.addcourse =false;
    this.addphotos = false;
  }
  addCourse()
  {
    this.addcourse =true;
    this.addevents = false;
    this.addactivities = false;
    this.addphotos = false;
  }
  addPhotos()
  {
    this.addphotos = true;
    this.addevents = false;
    this.addcourse =false;
    this.addactivities = false;
  }

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
  uploadPhoto() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upPhoto.pushUpload(this.currentUpload);
  }

  // uploadMulti() {
  //   const files = this.selectedFiles;
  //   const filesIndex = _.range(files.length);
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.pushUpload(this.currentUpload); }
  //   );
  // }

  onEnter() { this.submitted = true;
  this.upSvc.title = this.title;
  this.upSvc.desc = this.desc;
    // this.events1.push({desc: this.desc, title: this.title});
    this.uploadSingle();
  }
  onEnterPhotos() {
    this.submitted = true;
    this.upPhoto.title = this.title;
    // this.events1.push({desc: this.desc, title: this.title});
    this.uploadPhoto();

  }

  onAddCourse()
  {
    this.courses1.push({desc: this.desc, title: this.title});
  }
  onAddActivities()
  {
    this.activities1.push({title: this.title});
  }

  removeItemFromList(events) {
    // this.events.remove().then(_ => console.log('item deleted!'));
    this.db.object('/events/' + events.key ).remove();

  }
  removeItemFromCourse(course) {
    // this.events.remove().then(_ => console.log('item deleted!'));
    this.db.object('/courses/' + course.key ).remove();
  }
  removeItemFromActivities(activity) {
    // this.events.remove().then(_ => console.log('item deleted!'));
    this.db.object('/activities/' + activity.key ).remove();
  }
  removeItemFromPhotos(photo) {
    // this.events.remove().then(_ => console.log('item deleted!'));
    this.db.object('/photos/' + photo.key ).remove();
  }



}
