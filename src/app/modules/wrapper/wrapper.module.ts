import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule
  ]
})
export class WrapperModule { }
