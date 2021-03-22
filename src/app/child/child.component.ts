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

  //Renderer2 methods
  toggleFlag = false;
  onClick() {
    this.toggleFlag = this.toggleFlag === true ? false : true;
    if (this.toggleFlag) {
      this.renderer.setAttribute(
        this.attr.nativeElement,
        "background-color",
        "green"
      ); //setAttribute()
      this.renderer.addClass(this.attr.nativeElement, "fonty"); //addClass()
      this.renderer.setStyle(
        this.attr.nativeElement,
        "border",
        "2px solid black"
      ); //setStyle()
      console.log(this.attr.nativeElement);
    } else {
      this.renderer.removeAttribute(
        this.attr.nativeElement,
        "background-color"
      ); //removeAttribute()
      this.renderer.removeClass(this.attr.nativeElement, "fonty"); //removeClass()
      this.renderer.removeStyle(this.attr.nativeElement, "border"); //removeStyle()
      console.log(this.attr.nativeElement);
    }
    this.renderer.setProperty(this.attr.nativeElement, "id", "xyz"); //setProperty()
  }
}
