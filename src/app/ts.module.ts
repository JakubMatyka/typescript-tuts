import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClassesComponent } from './components/classes/classes.component';
import { ServerComponent } from './components/server/server.component';
import { TsComponent } from './ts.component';


@NgModule({
  declarations: [
    ClassesComponent,
    ServerComponent,
    TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    TsComponent
  ]
})
export class TsModule { }
