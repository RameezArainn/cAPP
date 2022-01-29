import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular'


@Injectable()
export class GlobalVariable {
    inProduction="Testing"
  
  constructor(private toastController: ToastController,){
     
  }
  async showToast(msg,color?:string,duration?:number) {
    duration=1000
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: duration
    });
    toast.present();
  }
}