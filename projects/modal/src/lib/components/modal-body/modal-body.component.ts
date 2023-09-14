import { Component, Input } from '@angular/core';

@Component({
     selector: 'ngx-modal-body',
     templateUrl: './modal-body.component.html',
     styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent {
     @Input() bodyClasses: string | string[] | Set<string> | {
          [klass: string]: any;
     } | null | undefined = undefined;
}
