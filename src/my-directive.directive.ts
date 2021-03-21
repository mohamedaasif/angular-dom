import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appMyDirective]"
})
export class MyDirectiveDirective {
  mytext = "Iam from directive";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    let text = this.renderer.createText(this.mytext);
    this.renderer.appendChild(this.el.nativeElement, text);
  }
}
