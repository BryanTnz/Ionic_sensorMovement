import { Component } from '@angular/core';

import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@awesome-cordova-plugins/device-motion/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  x!: string;
  y!: string;
  z!: string;
  timeStamp!: string;
  id: any;

  constructor(private deviceMotion: DeviceMotion) {
    this.x = "-";
    this.y = "-";
    this.z = "-";
    this.timeStamp = "-";
  }

  start(){

    try{
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 200
      };

      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => 
      {
        this.x = "" + acc.x;
        this.y = "" + acc.y;
        this.z = "" + acc.z;
        this.timeStamp = "" + acc.timestamp;
      }
      );

    }catch(err){
      alert("Error" + err)
    }
    
  }
  stop(){
    this.id.unsubscribe();
  }

}
