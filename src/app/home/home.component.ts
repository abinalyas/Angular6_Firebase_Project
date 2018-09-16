import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public db: AngularFireDatabase,public  appservice : AppService) { }
  imageUrls = [
    { url: '../../assets/img/slides/flexslider/5.jpg'},
    { url: '../../assets/img/slides/flexslider/1.jpg'},
    { url: '../../assets/img/slides/flexslider/2.jpg' },
    { url: './../assets/img/slides/flexslider/3.jpg' },
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';

  // public imagesUrl;

  ngOnInit() {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> this.appservice.rows = Math.floor(length/5) + 1);
    // this.imagesUrl = [
    //   '../../assets/img/slides/flexslider/1.jpg',
    //   '../../assets/img/slides/flexslider/2.jpg',
    //   './../assets/img/slides/flexslider/3.jpg',
    // ];
  }

}
