import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { LeftComponentComponent } from './Components/left-component/left-component.component';
import { RightComponentComponent } from './Components/right-component/right-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    LeftComponentComponent,
    RightComponentComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ]
})
export class FormModule { }
