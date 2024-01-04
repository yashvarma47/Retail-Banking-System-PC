import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-userid',
  templateUrl: './forgot-userid.component.html',
  styleUrls: ['./forgot-userid.component.css']
})
export class ForgotUseridComponent {
  pan: string = '';
  dob: string = '';
  mobno: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Simulate sending an email and generating a customer id
    const customerId = Math.floor(Math.random() * 1000) + 1;
 
    // Display an alert with the customer id
    alert(`Email has been sent with Customer ID: ${customerId}`);
 
    // Clear the form fields after submission
    this.pan = '';
    this.dob = '';
    this.mobno = '';
  }
}
