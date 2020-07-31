import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './sidenav/sidenav.component';
@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HeaderComponent, SideNavComponent],
  exports: [HeaderComponent, SideNavComponent],
})
export class UiSharedModule {}
