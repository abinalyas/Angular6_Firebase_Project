import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit  {
  string;
  length;
  splited: any[];
  courses: Observable<any[]>;
  activities: Observable<any[]>;
  constructor( public db: AngularFireDatabase) {
    this.courses = db.list('/courses').valueChanges();
    this.activities = db.list('/activities').valueChanges();
    // this.courses = db.object('/events').valueChanges();
    // console.log(JSON.stringify(this.courses));

    // const leavedate = this.db.collection('/events');
    // console.log(leavedate);
  }

  ngOnInit() {

  }

  split(input,number) {
    this.string = input.desc;
    // this.email.Tos.split(",");
    this.splited = this.string.split(".");
    debugger;
    this.length = number;
    console.log(this.splited);
    console.log(this.length);

  }

}
