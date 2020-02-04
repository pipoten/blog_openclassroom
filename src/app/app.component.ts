import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  constructor(
  ) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyARMKpOnjrFR6ZM2B1HXskXlTsQcwfCkf8",
      authDomain: "blog-f1ac1.firebaseapp.com",
      databaseURL: "https://blog-f1ac1.firebaseio.com",
      projectId: "blog-f1ac1",
      storageBucket: "blog-f1ac1.appspot.com",
      messagingSenderId: "1026144626496",
      appId: "1:1026144626496:web:af43d1084ca6c2421cfca5",
      measurementId: "G-91XH8FC85F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
