import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyTermsPageRoutingModule } from './policy-terms-routing.module';

import { PolicyTermsPage } from './policy-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyTermsPageRoutingModule
  ],
  declarations: [PolicyTermsPage]
})
export class PolicyTermsPageModule {}
