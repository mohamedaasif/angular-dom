import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  @ViewChild("ulRef") uList: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  toggle = false;
  onClick() {
    const element = this.uList.nativeElement;
    this.toggle = this.toggle === true ? false : true;
    if (this.toggle) {
      this.renderer.setStyle(element, "display", "flex"); //setStyle()
      this.renderer.addClass(element, "flex"); //addClass()
    } else {
      this.renderer.removeStyle(element, "display"); //removeStyle()
      this.renderer.removeClass(element, "flex"); //removeClass()
      const root = this.renderer.selectRootElement("ul"); //selectRootElement()
      console.log(root);
      this.renderer.setStyle(root, "background-color", "lightblue");
    }
    const comment = this.renderer.createComment("testing createComment()"); //createComment()
    console.log(comment);

    
  }
}
