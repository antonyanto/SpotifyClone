import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {

  constructor() { console.log(this.getValues) }

  ngOnInit(): void {
  }
  @Input() public getValues: any;
}
