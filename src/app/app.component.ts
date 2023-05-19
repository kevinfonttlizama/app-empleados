import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  titulo = 'listado de empleados';







  ngOnInit():void{

    firebase.initializeApp({

      apiKey: "AIzaSyBBUN9SCbsci-vf6OFjD6StfHcUZ2LhplY",
      authDomain: "mis-clientes-4fd54.firebaseapp.com",

    })
  }

  
  };





  
