import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { DemoModalModule } from './components/demo-modal/demo-modal.module';
@NgModule({
     declarations: [
          AppComponent
     ],
     imports: [
          BrowserModule,
          ModalModule.forChild(),
          DemoModalModule
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
