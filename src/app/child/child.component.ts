import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { MyDirectiveDirective } from "../../my-directive.directive";
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @ViewChild("attr") attr: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  whoAmI() {
    return "Iam a child component";
  }

  //setAttribute() and removeAttribute()
  isSet = true;
  setAttribute() {
    if (this.isSet) {
      this.renderer.setAttribute(
        this.attr.nativeElement,
        "background-color",
        "green"
      );
      this.isSet = false;
      console.log(this.attr.nativeElement);
    } else {
      this.renderer.removeAttribute(
        this.attr.nativeElement,
        "background-color"
      );
      this.isSet = true;
      console.log(this.attr.nativeElement);
    }
  }
}
