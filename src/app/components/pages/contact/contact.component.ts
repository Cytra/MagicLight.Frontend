import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private fun: AngularFireFunctions) { }

  ngOnInit() {
  }

  send(formValues){
    const callable = this.fun.httpsCallable('contactUs');
    callable(
    { name:  formValues.name,
      email : formValues.email,
      content: formValues.content, 
      subject: formValues.subject,
    }).subscribe();
  }
}