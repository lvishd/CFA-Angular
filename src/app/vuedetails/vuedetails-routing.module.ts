import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VuedetailsPage } from './vuedetails.page';

const routes: Routes = [
  {
    path: '',
    component: VuedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VuedetailsPageRoutingModule {}
