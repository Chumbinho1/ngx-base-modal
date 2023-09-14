import { Component, Input } from '@angular/core';

@Component({
     selector: 'ngx-modal-footer',
     templateUrl: './modal-footer.component.html',
     styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent {
     @Input() footerClasses: string | string[] | Set<string> | {
          [klass: string]: any;
     } | null | undefined = undefined;
}
