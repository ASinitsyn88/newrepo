import { Component } from '@angular/core';
import { MyFirstService } from "../services/my-first.service";

// It is a main page representation
@Component({
  selector: 'app-my-first-comp',
  // HTML view representation for this component
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {

  // These variables store the data from the .html page
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  // Table will be rendered using the data from this array
  messages: Array<any> = [];

  // Dependency Injection example
  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  // It defines submit logic
  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      // JSON object with the specified fields will be created
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages);
  }

  // It deletes messages from the table based on event (delete) received from child elements
  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
