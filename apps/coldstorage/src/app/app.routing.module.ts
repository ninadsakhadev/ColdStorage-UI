import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'setup',
        loadChildren: () =>
          import('@swamisamarth/setup/landing').then(
            (m) => m.SetupLandingModule
          ),
      },
      {
        path: 'setup/customers',
        loadChildren: () =>
          import('@swamisamarth/setup/customer').then((m) => m.CustomerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
