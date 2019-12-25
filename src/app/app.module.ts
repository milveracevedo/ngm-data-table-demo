import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgmDataTableModule } from 'ngm-data-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './cell/template/template.component';
import { HeaderExtraComponent } from './header/header-extra/header-extra.component';
import { HeaderTemplateComponent } from './header/header-template/header-template.component';
import { CustomIconExpandComponent } from './responsive/custom-icon-expand/custom-icon-expand.component';
import { DefaultComponent } from './responsive/default/default.component';
import { TemplateExpandComponent } from './responsive/template-expand/template-expand.component';
import { SimpleComponent } from './simple/simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    DefaultComponent,
    TemplateExpandComponent,
    HeaderExtraComponent,
    HeaderTemplateComponent,
    TemplateComponent,
    CustomIconExpandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgmDataTableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
