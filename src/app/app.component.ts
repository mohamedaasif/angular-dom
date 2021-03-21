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
  @ViewChild("input") input: ElementRef;

  div = this.renderer.createElement("h1");
  text = this.renderer.createText("Iam DOM");

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.appendChild(this.div, this.text);
    this.renderer.appendChild(this.el.nativeElement, this.div);
    this.renderer.setStyle(this.el.nativeElement, "text-align", "center");
  }


   num = 1;
  toggleList() {
    // let num = Math.floor(Math.random() * 100);
    let list = this.renderer.createElement("li");
    let text = this.input.nativeElement.value;
    let value = this.renderer.createText(`${this.num}. ${text}`);
    // let value = this.renderer.createText(`Random number : ${num}`);
    this.renderer.appendChild(list, value);
    console.log(list);
    this.renderer.appendChild(this.listItem.nativeElement, list);
    this.num++;
    this.input.nativeElement.value = ' ';
  }
}
