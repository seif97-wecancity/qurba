import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { IsLoginGuard } from "./shared/guard/is-login.guard";
import { IsNotLoginGuard } from "./shared/guard/is-not-login.guard";

const routes: Routes = [


  {
    path: '', canActivate: [IsNotLoginGuard], component: LoginComponent
  },
  {
    path: 'orders',canActivate: [IsLoginGuard], component: OrdersComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
