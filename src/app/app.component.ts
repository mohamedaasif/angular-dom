import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("list") listItem: ElementRef;

  div = this.renderer.createElement("h1");
  text = this.renderer.createText("Iam DOM");

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.appendChild(this.div, this.text);
    this.renderer.appendChild(this.el.nativeElement, this.div);
    this.renderer.setStyle(this.el.nativeElement, "text-align", "center");
  }

  toggleList() {
    let num = Math.floor(Math.random() * 100);
    let list = this.renderer.createElement("li");
    let numText = this.renderer.createText(`Random number : ${num}`);
    this.renderer.appendChild(list, numText);
    this.renderer.appendChild(this.listItem.nativeElement, list);
  }
}
