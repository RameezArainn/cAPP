import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'shop-detail',
    loadChildren: () => import('./shop-detail/shop-detail.module').then( m => m.ShopDetailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'report-a-problem',
    loadChildren: () => import('./report-a-problem/report-a-problem.module').then( m => m.ReportAProblemPageModule)
  },
  {
    path: 'policy-terms',
    loadChildren: () => import('./policy-terms/policy-terms.module').then( m => m.PolicyTermsPageModule)
  },
  {
    path: 'barcode-modal',
    loadChildren: () => import('./barcode-modal/barcode-modal.module').then( m => m.BarcodeModalPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
