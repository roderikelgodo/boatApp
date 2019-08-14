import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatService, WindService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WindService,
    BoatService
  ]
})
export class ServiceModule { }
