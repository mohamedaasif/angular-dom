import { Component, OnInit } from '@angular/core';
import { MyDirectiveDirective } from '../../my-directive.directive';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  whoAmI() {
    return "Iam a child component";
  }

}