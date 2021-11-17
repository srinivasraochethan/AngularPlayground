import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { CheckImplicitOverrideComponent } from './components/check-implicit-override/check-implicit-override.component';

@NgModule({
  declarations: [
    BaseComponent,
    CheckImplicitOverrideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
