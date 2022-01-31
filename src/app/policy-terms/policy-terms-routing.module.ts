import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyTermsPage } from './policy-terms.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyTermsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyTermsPageRoutingModule {}
