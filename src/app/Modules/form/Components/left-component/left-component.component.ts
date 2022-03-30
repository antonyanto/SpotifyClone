import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.css']
})
export class LeftComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public f_name: any;
  public l_name: any;
  public email: any;
  public mobile: any;
  public formValues: any;

  @Output() public toParent = new EventEmitter();
  sendDataToParent() {
    this.formValues = [this.f_name, this.l_name, this.email, this.mobile];
    this.toParent.emit(this.formValues);
  }
}
