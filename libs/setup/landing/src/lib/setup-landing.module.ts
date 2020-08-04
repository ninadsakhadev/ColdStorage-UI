import { MaterialModule, UiSharedModule } from '@swamisamarth/ui-shared';

import { CardListComponent } from './card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    UiSharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CardListComponent },
    ]),
  ],
  declarations: [CardListComponent],
})
export class SetupLandingModule {}
