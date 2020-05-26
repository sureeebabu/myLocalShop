import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesdetailsPage } from './categoriesdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesdetailsPageRoutingModule {}
