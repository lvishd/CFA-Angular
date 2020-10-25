import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuedetailsPageRoutingModule } from './vuedetails-routing.module';

import { VuedetailsPage } from './vuedetails.page';

import { ButtonBaseComponent } from '../../app/button-base/button-base.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuedetailsPageRoutingModule
  ],
  declarations: [VuedetailsPage, ButtonBaseComponent]
})
export class VuedetailsPageModule {}
