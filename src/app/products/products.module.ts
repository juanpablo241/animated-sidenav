import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsLevelThereOneComponent } from './products-level-there-one/products-level-there-one.component';
import { ProductsLevelThereTwoComponent } from './products-level-there-two/products-level-there-two.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsLevelThereOneComponent,
    ProductsLevelThereTwoComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
