import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {  NavbarRoutingModule } from './navbar-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarRoutingModule,
  ],
  exports:[HeaderComponent]
})
export class NavbarModule { }
