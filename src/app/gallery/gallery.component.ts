import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout} from 'ngx-gallery';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {mdb} from 'assets/js/mdb.js'
import {AppService} from '../app.service';
declare var mdb: any;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  itemsRef;
  photoList: any[];
  i = 0;
  rows;

  courses: Observable<any[]>;

  constructor(public db: AngularFireDatabase,public  appservice:AppService) {

    // db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> {
    //   this.rows = Math.floor(length/5) + 1;
    //   console.log("local" + this.rows);
    // });

    this.itemsRef = db.list('/photos/');

    // this.db.list('/photos').map(list=>list.length).subscribe(length=>console.log("hello" + length))



    this.galleryImages = [];
    this.galleryOptions = [];


  }


  ngOnInit() {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> {
      this.rows = Math.floor(length/5) + 1;
    });


    this.accCheck();


  }

  getGalleryOptions() {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> {
      this.rows = Math.floor(length/5) + 1;
    });

    // this.rows = Math.floor(this.i/5) + 1;
    // console.log("length" +this.rows);
    this.galleryOptions = [
      {

        image: false,
        width: '100%',
        height: '400px',
        thumbnailsRows: this.appservice.rows,
        thumbnailsColumns: 5,
        imageDescription: true,
        // fullWidth: true,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        thumbnailsRows: this.rows,
        thumbnailsColumns: 5,
        breakpoint: 800,
        width: '200px',
        height: '300px',
        imagePercent: 80,
        thumbnailsPercent: 100,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];


  }

  accCheck() {



    this.itemsRef.snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          this.photoList = Object.values(action.payload.val());
          this.getGalleryImages((action.payload.val()));
        });
      });
    this.getGalleryOptions();
    // this.getGalleryOptions();

  }

  getGalleryImages(input) {
    // this.galleryImages[this.i].small=input.url;
    this.galleryImages.push({
      small: input.url,
      big: input.url,
      description: input.title
    });
    this.i++;
    // console.log("length" + this.i);
 // this.getGalleryOptions();

  }

}
