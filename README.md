# NgxBaseModal

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)
![GitHub repo size](https://img.shields.io/github/repo-size/Chumbinho1/ngx-base-modal)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/Chumbinho1/ngx-base-modal/main)

> The ngx-base-modal is a library that provides a base component to assist in creating modals.

## 💻 Dependencies

Having the libraries installed:

- [ngx-bootstrap@11.0.1](https://github.com/valor-software/ngx-bootstrap/tree/v11.0.1);
- [bootstrap@5.2.3](https://github.com/twbs/bootstrap/tree/v5.2.3);

## 🚀 Installing NgxBaseModal

```
npm i ngx-base-modal
```
## ☕ Usage

To use ngx-base-modal in your project, follow these steps:

Import the ModalModule from ngx-base-modal.

example-modal.module.ts
```
import {ModalModule} form 'ngx-base-modal';

@NgModule({
     imports: [
          ...
          ModalModule
          ...
     ]
}) 
export class ExampleModalModule {}
```

Modal structure

example-modal.component.ts

```
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseModal } from 'ngx-modal-base';

@Component({
     selector: 'app-example-modal',
     template: ´
          <ngx-modal>
               <ngx-modal-header [title]="title" (closeEventEmitter)="close()" />
               <ngx-modal-body>
                    Modal Body
               </ngx-modal-body>
               <ngx-modal-footer>
                    <button class="btn btn-secondary" (click)="close()">
                         Cancelar
                    </button>
                    <button class="btn btn-primary" (click)="close()">
                         Confirmar
                    </button>
               </ngx-modal-footer>
          </ngx-modal>
     ´,
     styleUrls: ['./example-modal.component.scss']
})
export class ExampleModalComponent extends BaseModal {
     constructor(
          _bsModalRef: BsModalRef
     ) {
          super(_bsModalRef);
     }
}
```

Import the ExampleModalModule

app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { ExampleModalModule } from './components/example-modal/example-modal.module';
@NgModule({
     declarations: [
          AppComponent
     ],
     imports: [
          BrowserModule,
          ModalModule.forChild(),
          ExampleModalModule
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
```

Open the modal

app.component.ts
```
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';

@Component({
     selector: 'demo-root',
     template:´
          <main class="w-100 vh-100 d-flex justify-content-center align-items-center">
               <button class="btn btn-primary" (click)="openModal()">Open Modal</button>
          </main>
     ´,
     styleUrls: ['./app.component.scss']
})
export class AppComponent {
     title = 'example-modal';

     constructor(
          private __bsModalService: BsModalService
     ) { }

     openModal() {
          this.__bsModalService.show(ExampleModalComponent, {
               initialState: {
                    title: 'Modal Title'
               },
               class: 'modal-dialog-centered modal-lg ',
               ignoreBackdropClick: true
          });
     }
}
```

## 📝 License

This project is licensed under the MIT License. Please refer to the [LICENSE](LICENSE.md) file for more details.
