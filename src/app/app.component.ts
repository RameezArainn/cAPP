import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router:Router,private navCtrl:NavController) {
    // let login=true
    // if(login){
    //   this.navCtrl.navigateRoot('/tabs');

    // }
    // else{
    //   this.navCtrl.navigateRoot('/login');

    // }
  }

}
