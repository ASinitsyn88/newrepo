import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from "@angular/forms";
import { MessageDetailsComponent } from "./message-details/message-details.component";

@NgModule({
  // Need to declare new modules here
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent
  ],
  // Import modules that we need for our application
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
