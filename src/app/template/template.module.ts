import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatePageRoutingModule } from './template-routing.module';

import { TemplatePage } from './template.page';
import { HeaderComponent } from '../header/header.component';
import { ButtonProductComponent } from '../button-product/button-product.component';
import { ButtonBaseComponent } from '../button-base/button-base.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatePageRoutingModule
  ],
  declarations: [TemplatePage, ButtonProductComponent, HeaderComponent,ButtonBaseComponent]
})
export class TemplatePageModule {}
