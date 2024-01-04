import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  selectedOption: string = 'Forget Password';
  dropdownOptions: string[] = ['Forget Password', 'Forget ID'];

  constructor(private router: Router) {}

  onOptionSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }
  ngOnInit() {
    this.router.navigate(['/next']);
  }

  onNextClick() {
    switch (this.selectedOption) {
      case 'Forget Password':
        this.router.navigate(['/forget-pass']);
        break;
      case 'Forget ID':
        this.router.navigate(['/forget-id']);
        break;
      default:
      
        break;
    }
  }
  
}
