import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, BrowserModule],
  providers: [],
  exports: [HeaderComponent]
})
export class SharedModule { }
