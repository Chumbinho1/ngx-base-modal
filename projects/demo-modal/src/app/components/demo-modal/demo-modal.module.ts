import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal-base';
import { DemoModalComponent } from './demo-modal.component';



@NgModule({
     declarations: [
          DemoModalComponent
     ],
     imports: [
          CommonModule,
          ModalModule
     ]
})
export class DemoModalModule { }
