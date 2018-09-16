import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService} from './app.service';

import {RouterModule, Routes} from '@angular/router';
import { SliderModule } from 'angular-image-slider';
import 'hammerjs';
import 'mousetrap';
import { fromPromise } from 'rxjs/Observable/fromPromise';
import { AuthService, AppGlobals } from 'angular2-google-login';


import { ModalGalleryModule } from 'angular-modal-gallery';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import {NgxGalleryModule} from 'ngx-gallery';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AdddataComponent } from './adddata/adddata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorage, AngularFireStorageModule} from 'angularfire2/storage';
import {UploadphotoService} from './uploadphoto.service';


export const firebaseConfig = {
  apiKey: "AIzaSyBRgda9yX_qo4MhVqtf9dT9hUTXPv2VTlc",
  authDomain: "af-de-mahe.firebaseapp.com",
  databaseURL: "https://af-de-mahe.firebaseio.com",
  projectId: "af-de-mahe",
  storageBucket: "af-de-mahe.appspot.com",
  messagingSenderId: "129368052704"

};


const appRoutes: Routes = [
  {path : '', component :  HomeComponent },
  {path : 'home', component : HomeComponent },
  {path : 'courses', component : CoursesComponent },
  {path : 'gallery', component : GalleryComponent },
  {path : 'events', component : EventsComponent},
  {path : 'contacts', component : ContactComponent },
  {path : 'login', component : LoginComponent },
  {path : 'adddata', component : AdddataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    EventsComponent,
    CoursesComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdddataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    SlideshowModule,
    NgxGalleryModule,
    Angular2ImageGalleryModule,
    ModalGalleryModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService, AngularFireAuth, AngularFireDatabase, AngularFirestore, AppService, UploadphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
