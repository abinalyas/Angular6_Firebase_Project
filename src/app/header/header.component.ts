import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {AppService} from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public db: AngularFireDatabase,public  appservice : AppService) { }

  ngOnInit() {
    this.db.list('/photos/').snapshotChanges().map(list =>list.length).subscribe(length=> this.appservice.rows = Math.floor(length/5) + 1);
  }

  navTab(input)
  {
    if (input === 0) {
      this.router.navigateByUrl('/home');
    }
    if (input === 1) {
      this.router.navigateByUrl('/courses');
    }
    if (input === 2) {
      this.router.navigateByUrl('/gallery');
    }
    if (input === 3) {
      this.router.navigateByUrl('/events');
    }
    if (input === 4) {
      this.router.navigateByUrl('/contacts');
    }

  }

}
