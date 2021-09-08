import { ReceitaDeleteComponent } from './components/receita/receita-delete/receita-delete.component';
import { ReceitaUpdateComponent } from './components/receita/receita-update/receita-update.component';
import { ReceitaCreatComponent } from './components/receita/receita-creat/receita-creat.component';
import { ReceitaCrudComponent } from './views/receita-crud/receita-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from'./views/home/home.component';
import {ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path:"products",
  component: ProdutoCrudComponent
},
{
  path:"products/creat",
  component: ProductCreatComponent
},
{
  path:"products/update/:id",
  component: ProductUpdateComponent
},
{
  path:"products/delete/:id",
  component: ProductDeleteComponent
},
{
  path:"receita",
  component: ReceitaCrudComponent
},
{
  path:"receita/creat",
  component: ReceitaCreatComponent
},
{
  path:"receita/update/:id",
  component: ReceitaUpdateComponent
},
{
  path:"receita/delete/:id",
  component: ReceitaDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
