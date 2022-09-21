import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLevelThereOneComponent } from './products-level-there-one/products-level-there-one.component';
import { ProductsLevelThereTwoComponent } from './products-level-there-two/products-level-there-two.component';

const routes: Routes = [
  {
    path:'level3.1',
    component: ProductsLevelThereOneComponent
  },
  {
    path:'level3.2',
    component: ProductsLevelThereTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
