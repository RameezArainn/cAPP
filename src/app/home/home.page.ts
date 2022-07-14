import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeModalPage } from '../barcode-modal/barcode-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl:ModalController) {}
//  async showBarcode(){
//    console.log('modalss')
//     const modal = await this.modalCtrl.create({
//       component: BarcodeModalPage,
//       breakpoints: [0, 0.3, 0.5, 0.8],
//       initialBreakpoint: 1,
//       cssClass:'qrModal',
//       showBackdrop: true,
//       backdropDismiss: true,
//     });
//     await modal.present();
//   }
onSearchChange(e){
  console.log(e)
}
}
