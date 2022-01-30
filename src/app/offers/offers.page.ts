import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  segmentValue='offers'
  constructor() { }

  ngOnInit() {
  }
  switchSegment(event){
    console.log(event)
   this.segmentValue= event.detail.value
  }
}
