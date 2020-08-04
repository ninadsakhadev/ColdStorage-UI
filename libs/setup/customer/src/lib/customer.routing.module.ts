import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent,
  },
  //   {
  //     path: 'new',
  //     component: NewClientComponent,
  //     canActivate: [AuthenticationGuard, AuthorizationGuard],
  //   },
  //   {
  //     path: ':clientId/edit',
  //     component: EditClientComponent,
  //     canActivate: [AuthenticationGuard, AuthorizationGuard],
  //   },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
