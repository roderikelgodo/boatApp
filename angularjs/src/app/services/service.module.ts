import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentService } from "./service.index";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    VentService
  ]
})
export class ServiceModule { }
