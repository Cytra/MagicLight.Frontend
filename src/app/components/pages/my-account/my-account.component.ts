import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../../modals/User.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {

  user:User;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.auth.googleSignIn();
  }

  loginwithFacebook(){
    this.auth.facebookSignIn()
  }

  

}
