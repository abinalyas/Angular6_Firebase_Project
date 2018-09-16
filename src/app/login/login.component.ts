import {Component, EventEmitter, NgZone, OnInit, Output} from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imageURL: string;
  email: string;
  name: string;
  token: string;
  loginacc:string="";
  adminacc:string="";
  empacc:string="";
  // adminlevel: Observable<any[]>;
  adminlevel1: AngularFireList<any>;
  adminlevel: Observable<any[]>;
  adminList: any[];
  i = 0;
  itemsRef;





  @Output() admin: EventEmitter<any> = new EventEmitter();
  @Output() gId: EventEmitter<any> = new EventEmitter();


  constructor(private auth: AuthService, private zone: NgZone,public af: AngularFireDatabase, private  router: Router, private  appservice: AppService) {
    this.googleAuthenticate();
    // this.adminlevel = af.list('/adminlevel/emai');
    this.itemsRef = af.list('/adminlevel/');
    af.object('/adminlevel/').snapshotChanges().map(action => {
      const $key = action.payload.key;
      this.adminlevel1 = af.list('/adminlevel/');
      this.adminlevel = this.adminlevel1.valueChanges();
      this.adminlevel = this.adminlevel1.snapshotChanges().map(changes => {

        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      // this.adminlevel.subscribe(
      //   competitors => {
      //     competitors.map(competitor =>
      //       this.adminList = competitor.email
      //     );
      //   });
      const data = { $key, ...action.payload.val() };
      console.log(this.adminList);
      console.log(this.adminlevel1)
      // this.adminList = af.list('/adminlevel' + data.$key);
      return data;

    }).subscribe(item => console.log(item.$key));



  }

  ngOnInit() {
    AppGlobals.GOOGLE_CLIENT_ID = '129368052704-pfa1ockbgq5slqp0g3qkv7hr8kj8a4ek.apps.googleusercontent.com';
    setTimeout(() => { this.googleAuthenticate() }, 50);
  }
  googleAuthenticate() {

    this.auth.authenticateUser((result) => {
      this.zone.run(() => {
        this.getData();
      });
    });
  }
  getData() {

    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.gId.emit(this.email);
    this.accCheck();
    console.log(this.email);
    console.log(this.adminList);
    // this.gId.emit(this.email);
    this.accCheck();
    // Path=this.email.slice(0, -4);
  }


  accCheck(){

      console.log(this.adminList);
    this.itemsRef.snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          console.log(action.type);
          console.log(action.key);
          console.log(action.payload.val());
          this.adminList = Object.values(action.payload.val());
          console.log(action.payload.val().email);
          console.log(this.adminList);
          if(this.email == action.payload.val().email){
                  this.adminacc = 'admin';
                  this.appservice.warning = true;
                  this.router.navigateByUrl('/adddata');
                  this.admin.emit(this.adminacc);
                  return;
                }
        });
      });


    // this.af.list('/adminlevel/', { preserveSnapshot: true}).subscribe(snapshots=>{
    //   snapshots.forEach(snapshot => {
    //     if(this.email == snapshot.val()){
    //       this.adminacc = 'admin';
    //       debugger;
    //       this.router.navigateByUrl('/adddata');
    //       this.admin.emit(this.adminacc);
    //       return;
    //     }
    //   });
    //   if(this.adminacc!="admin" && this.empacc=="no"){
    //     console.log("Invalid user");
    //     this.logout();
    //   }
    //   else if(this.empacc=="employee" && this.adminacc!="admin"){
    //     this.admin.emit(this.empacc);
    //   }
    // });
  }

  logout() {

    // redirection path defined in auth.services.ts --> userLogout()
    let scopeReference = this;
    this.auth.userLogout(function () {
      scopeReference.clearLocalStorage();
    });
  }


  clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }





}
