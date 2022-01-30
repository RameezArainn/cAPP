import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  constructor( private navCtrl:NavController) { }

  ngOnInit() {
  }
submit(){
  this.navCtrl.navigateRoot('/tabs')
}
}
