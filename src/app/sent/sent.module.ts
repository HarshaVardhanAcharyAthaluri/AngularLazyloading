import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentRoutingModule } from './sent-routing.module';
import { SentComponent } from './sent.component';

@NgModule({
  declarations: [SentComponent],
  imports: [
    CommonModule,
    SentRoutingModule
  ]
})
export class SentModule { }
