import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/goods-list', pathMatch: 'full' },
    { path: 'goods-list', component: GoodsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
