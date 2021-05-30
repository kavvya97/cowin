import { Component } from '@angular/core';  
import { AlertController } from '@ionic/angular';  
  
@Component({  
  selector: 'app-home',  
  templateUrl: 'home.page.html',  
  styleUrls: ['home.page.scss'],  
})  
export class HomePage {  
  constructor(public alertCtrl: AlertController) { }  
  
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree'] 
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();
    console.log(result);  
  }  
}