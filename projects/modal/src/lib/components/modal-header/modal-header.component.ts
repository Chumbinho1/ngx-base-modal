import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
     selector: 'ngx-modal-header',
     templateUrl: './modal-header.component.html',
     styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
     @Input() useNgContent: boolean = false;
     @Input() title: string = "";
     @Input() headerClasses: string | string[] | Set<string> | {
          [klass: string]: any;
     } | null | undefined = undefined;
     @Input() titleClasses: string | string[] | Set<string> | {
          [klass: string]: any;
     } | null | undefined = undefined;
     @Input() closeButtonClasses: string | string[] | Set<string> | {
          [klass: string]: any;
     } | null | undefined = undefined;

     @Output() closeEventEmitter: EventEmitter<void> = new EventEmitter<void>();

     close() {
          this.closeEventEmitter.emit();
     }
}
