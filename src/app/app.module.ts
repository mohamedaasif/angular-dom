import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";
import { MyDirectiveDirective } from "../my-directive.directive";
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    MyDirectiveDirective,
    Child2Component,
    Child3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
