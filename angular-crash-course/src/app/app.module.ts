import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from "@angular/forms";
import { MessageDetailsComponent } from "./message-details/message-details.component";
import { MyFirstService } from "./services/my-first.service";
import { MenuComponent } from "./menu/menu.component";
import { AboutComponent } from "./about/about.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import {NewProductComponent} from "./new-product/new-product.component";

@NgModule({
  // Need to declare new modules here
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent
  ],
  // Import modules that we need for our application
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // Modules can be declared here
  providers: [MyFirstService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
