import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';

@Component({
     selector: 'demo-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss']
})
export class AppComponent {
     title = 'demo-modal';

     constructor(
          private __bsModalService: BsModalService
     ) { }

     openModal() {
          this.__bsModalService.show(DemoModalComponent, {
               initialState: {
                    title: 'Modal Title'
               },
               class: 'modal-dialog-centered modal-lg ',
               ignoreBackdropClick: true
          });
     }
}
