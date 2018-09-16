
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(public db: AngularFireDatabase,public  appservice : AppService) { }

  ngOnInit() {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> this.appservice.rows = Math.floor(length/5) + 1);
    // this.imagesUrl = [
    //   '../../assets/img/slides/flexslider/1.jpg',
    //   '../../assets/img/slides/flexslider/2.jpg',
    //   './../assets/img/slides/flexslider/3.jpg',
    // ];
  }
}
