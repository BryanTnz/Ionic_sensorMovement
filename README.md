# Ionic_sensorMovement

1) src/app/home/home.page.html

<ion-content>

  ...
  <div>

    <h1>X : {{ x }}</h1> 
    <h1>Y: {{ y }}</h1> 
    <h1>Z: {{ z }}</h1> 
    <h1>TimeStamp : {{ timeStamp }}</h1>

    <ion-button (click) = "start()">start</ion-button>
    <ion-button (click) = "stop()">stop</ion-button>
    
  </div>
</ion-content>

2.0) Installar el plugin
Installar el modulo del plugin


2) src/app/home/home.page.ts

import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@awesome-cordova-plugins/device-motion/ngx';


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

3) Android
	2) ionic cap add android | ionic cap add ios
	3) ionic cap open android | ionic cap open ios

VideoTutorial
https://www.youtube.com/watch?v=3gQ2HZUr_g0&t=581s

Documentation
https://ionicframework.com/docs/native/device-motion
