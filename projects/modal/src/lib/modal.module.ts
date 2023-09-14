import { NgModule } from '@angular/core';
import { ModalBodyModule } from './components/modal-body/modal-body.module';
import { ModalFooterModule } from './components/modal-footer/modal-footer.module';
import { ModalHeaderModule } from './components/modal-header/modal-header.module';
import { ModalComponent } from './modal.component';



@NgModule({
     declarations: [
          ModalComponent
     ],
     imports: [
          ModalHeaderModule,
          ModalBodyModule,
          ModalFooterModule
     ],
     exports: [
          ModalComponent,
          ModalHeaderModule,
          ModalBodyModule,
          ModalFooterModule
     ]
})
export class ModalModule { }
