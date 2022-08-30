import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WizardComponent } from '../wizard/wizard.component';
import { Wizard2Component } from '../wizard2/wizard2.component';

@NgModule({
  declarations: [HomeComponent, WizardComponent, Wizard2Component],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
