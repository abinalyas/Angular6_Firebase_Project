import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  courses: Observable<any[]>;
  constructor( public db: AngularFireDatabase) {
    this.courses = db.list('/events').valueChanges();
  }

  ngOnInit() {
  }

}
