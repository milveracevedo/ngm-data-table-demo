import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './cell/template/template.component';
import { HeaderExtraComponent } from './header/header-extra/header-extra.component';
import { HeaderTemplateComponent } from './header/header-template/header-template.component';
import { CustomIconExpandComponent } from './responsive/custom-icon-expand/custom-icon-expand.component';
import { DefaultComponent } from './responsive/default/default.component';
import { TemplateExpandComponent } from './responsive/template-expand/template-expand.component';
import {SimpleComponent} from "./simple/simple/simple.component";
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'header/header-template', component: HeaderTemplateComponent },
  { path: 'header/header-template-extra', component: HeaderExtraComponent },
  { path: 'cell/cell-template', component: TemplateComponent },
  { path: 'responsive/default', component: DefaultComponent },
  { path: 'responsive/template', component: TemplateExpandComponent },
  { path: 'responsive/custom-icon-expand', component: CustomIconExpandComponent },
  { path: 'responsive/lazy-loading', component: LazyLoadingComponent },
  { path: '**', component: SimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
