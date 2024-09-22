import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {

  // These variables store the data from the .html page
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;

  onSubmit() {
    // It defines submit logic
    this.isSubmitted = true;
  }
}
