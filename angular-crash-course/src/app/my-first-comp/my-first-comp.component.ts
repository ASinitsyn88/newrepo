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
  // Table will be rendered using this data
  messages: Array<any> = [];

  // It defines submit logic
  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages);
  }
}
