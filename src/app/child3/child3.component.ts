import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements AfterViewInit {
 
  @ViewChild('parent') parent:ElementRef;
  @ViewChild('refChild') refChild:ElementRef; 
  @ViewChild('listen') listen:ElementRef;

  constructor(private renderer:Renderer2) { }

  toggle = false;
  p = this.renderer.createElement('p');
  text = this.renderer.createText('Child3 component(insertBefore())'); 

  ngAfterViewInit() {
    const element = this.renderer.appendChild(this.p,this.text);
    
    const  div = this.parent.nativeElement;
    const child = this.refChild.nativeElement;
    this.renderer.insertBefore(div,this.p,child);  //insertBefore()

    //listen()
    this.renderer.listen(this.listen.nativeElement,'click',()=>{
        this.toggle = (this.toggle === true) ? false : true;
        if(this.toggle) {
          this.renderer.setStyle(this.listen.nativeElement,'text-decoration','none');
        } else {
          this.renderer.removeStyle(this.listen.nativeElement,'text-decoration');
        }
    });
  }

  onClick() {
    this.renderer.removeChild(this.parent.nativeElement,this.p); //removeChild()
  }

  removeParent() {
    //removing parent node by clicking the child element
    const parent = this.refChild.nativeElement.parentNode; //parentNode
    console.log(parent);
    this.renderer.setStyle(parent,'display','none');
  }

  
  
}