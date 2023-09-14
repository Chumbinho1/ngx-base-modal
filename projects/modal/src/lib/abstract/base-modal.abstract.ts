import { BsModalRef } from "ngx-bootstrap/modal";

export abstract class BaseModal {
     title: string = "";

     constructor(
          private _bsModalRef: BsModalRef
     ) { }

     close() {
          this._bsModalRef.hide();
     }
}
