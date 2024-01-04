// customer-registration.component.ts
 
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
 
  newCustomer: any = {};
 
 
  isDocumentNumberDisabled = true;
 
 
  onDocumentTypeChange() {
    this.isDocumentNumberDisabled = this.newCustomer.documentType !== 'specificDocumentType';
  }
 
 
 
  submitNewCustomerForm() {
   
    console.log('New Customer Details:', this.newCustomer);
 
    alert("Form submitted");
 
    this.resetForm();
  }
 
 
  cancelNewCustomerForm() {
    this.resetForm();
  }
 
 
  private resetForm() {
    this.newCustomer = {};
 
    this.isDocumentNumberDisabled = true;
  }
}
 