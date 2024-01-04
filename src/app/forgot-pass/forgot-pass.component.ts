import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  customerId!: number;
  dob: string = '';
  panNumber: string = '';
  mobileNumber: number =0;

  onSubmit() {
    const customerIdNumber: number = parseInt(this.customerId.toString(), 10);
    const mobileNumber: number = parseInt(this.mobileNumber.toString(), 10);
    // Perform submission logic (you can add your logic here)
    console.log('Reset link is sent to your email');
    console.log('Converted Customer ID:', customerIdNumber);
    console.log('Converted Mobile Number:', mobileNumber);
  }
}
