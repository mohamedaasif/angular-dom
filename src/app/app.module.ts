import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";
import { MyDirectiveDirective } from "../my-directive.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    MyDirectiveDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
