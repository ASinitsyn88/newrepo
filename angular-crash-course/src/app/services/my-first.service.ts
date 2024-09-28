import { Injectable } from '@angular/core';

// Injectable decorator says it's a service and it might be injected
@Injectable(//{
  // root - it's available at root level as Singleton
  // any - you can use this service anywhere in the application
  // SomeModule - you can specify custom module name to provide the service into it
  // null - disables automatic dependency injection
  //providedIn: 'root'
//}
)
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  // Insert a few messages during the bootstrap
  init(): void {
    this.insert({
      name: 'Alibou',
      email: 'alibou@mail.com',
      message: 'Hello world'
    });
    this.insert({
      name: 'John',
      email: 'john@mail.com',
      message: 'Hello world - John'
    });
    this.insert({
      name: 'Doe',
      email: 'doe@mail.com',
      message: 'Hello world - Doe'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
