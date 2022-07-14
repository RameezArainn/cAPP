import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeModalPage } from '../barcode-modal/barcode-modal.page';
import { GlobalVariable } from '../globals';
import { ServerService } from '../providers/server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchResults=[]
  cityData: any;
  placename: any;
  todayData: any;
  todayTemp;

  constructor(private modalCtrl:ModalController,
    public server:ServerService,
    public globals:GlobalVariable,
    ) {
      this.getCityWeather('260622');
    }
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
  console.log(e.detail.value)
  let text=e.detail.value;
if(text!=''){
  this.server.autoComplete(text).subscribe(res=>{
    console.log(res)
    if(res){
    this.searchResults=res;
    }
  },err=>{
    console.log(err)
    this.globals.showToast('Network Error','danger')

  })
}
else{
  this.searchResults=[];


}
}
getCityWeather(key,name?){
  if(name){
    // this.placename=name
  }
  this.server.getCityInfo(key).subscribe(res=>{
    this.searchResults=[];
    if(res){
    this.getCityInfo(name);
    this.cityData=res.DailyForecasts;
    this.todayData=this.cityData[0];
   this.todayTemp=((this.todayData.Temperature.Maximum.Value-32) / 1.8).toFixed(0)
   console.log(this.todayTemp,'temp')
    }
    console.log(res)
  },err=>{
    this.globals.showToast('Network Error','danger')
    console.log(err)
  })
}
getCityInfo(name){
  this.server.searchCity(name).subscribe(res=>{
    console.log(res)
    if(res){
      this.placename=res[0].EnglishName+','+res[0].Country.EnglishName
    }
  },err=>{
    this.globals.showToast('Network Error','danger')

    console.log(err)
  })
}
}
