import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseModal } from 'ngx-modal-base';

@Component({
     selector: 'demo-demo-modal',
     templateUrl: './demo-modal.component.html',
     styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent extends BaseModal {
     constructor(
          _bsModalRef: BsModalRef
     ) {
          super(_bsModalRef);
     }
}
