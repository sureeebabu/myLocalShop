import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesdetailsPageRoutingModule } from './categoriesdetails-routing.module';

import { CategoriesdetailsPage } from './categoriesdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesdetailsPageRoutingModule
  ],
  declarations: [CategoriesdetailsPage]
})
export class CategoriesdetailsPageModule {}
