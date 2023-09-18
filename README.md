# NgxBaseModal

![GitHub repo size](https://img.shields.io/github/repo-size/Chumbinho1/ngx-base-modal)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/Chumbinho1/ngx-base-modal/main)

> O ngx-base-modal é uma biblioteca que oferece um componente base para auxiliar na criação de modais.

## 💻 Dependências

Ter instalado as bibliotecas:

- [ngx-bootstrap@11.0.1](https://github.com/valor-software/ngx-bootstrap/tree/v11.0.1);
- [bootstrap@5.2.3](https://github.com/twbs/bootstrap/tree/v5.2.3);

## 🚀 Instalando o NgxBaseModal

```
npm i ngx-base-modal
```

## ☕ Utilizando

Para usar o ngx-base-modal em seu projeto, siga estas etapas:

Importe o ModalModule do ngx-base-modal

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

Estrutura do modal

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

Importar o ExampleModalModule

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

Abrir o modal

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


## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
