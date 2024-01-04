import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent {
    constructor(private router: Router) {}

    userid: string = '';
    password: string = '';
    isLoginDisabled: boolean = true;
  
    onUserIdInputChange() {
      this.isLoginDisabled = !(this.userid.length === 8);
    }
    
  
    onPasswordInputChange() {
      // If you want to perform any validation on the password, you can add it here
    }
  
    login() {
      // Add your authentication logic here
      console.log('Logging in:', this.userid);
      this.router.navigate(['/customerlogin']);
    }

    forgotCredentials() {
      // Your logic for handling both forgot password and forgot user ID
      // You can implement a modal, show a message, or navigate to a specific page
      // based on the user's choice
      // For example:
      // if (userWantsPassword) {
      //   this.forgotPassword();
      // } else {
      //   this.forgotUserId();
      // }

      
    }
    

    forgotPassword() {
      // Add logic for handling "Forgot Password" action
      console.log('Forgot Password clicked');
    }
  
    forgotUserId() {
      // Add logic for handling "Forgot User ID" action
      console.log('Forgot User ID clicked');
    }
    
  }


