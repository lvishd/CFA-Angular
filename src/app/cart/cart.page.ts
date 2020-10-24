import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, PickerController } from "@ionic/angular";
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Array<any> = [];
  
  constructor( 
    private router: Router, 
    private storage: Storage,
    private pickerCtrl: PickerController, 
    private alertController: AlertController) { 
    // Si je ne met pas cela ngOnInit n'est pas call
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.ngOnInit();
      }
    });
  }

   ngOnInit() {
    this.storage.forEach(v => {
      this.cart.push(v)
    })
  }

  getPrice() {
    let total = 0
    this.cart.forEach(el => {
      total += el.price*el.count
    })
    return total
  }

  async openPicker(prod) {
    const picker = await this.pickerCtrl.create({
      buttons: [{ text: 'Cancel', role: 'cancel'}, {
          text: 'Confirm',
          handler: value => this.actionPiker(value.number, prod)  
        }
      ],
      columns: [{ name: 'number',
          options: [
            {text: '0', value: 0},
            {text: '1', value: 1},
            {text: '2', value: 2},
            {text: '3', value: 3},
            {text: '4', value: 4},
            {text: '5', value: 5},
            {text: 'Ajouter 1', value: 1},
            {text: 'Enlever 1', value: 1},
          ]
        },
      ]
    });
    await picker.present();
  }

  actionPiker(number, prod) {
    this.storage.remove(prod.name)
    if(['1','2','3','4','5'].includes(number.text)) {
      this.storage.set(prod.name, {...prod, count: number.value});  
      this.update(prod, number.value)
    }
    if(number.text == '0') { 
      this.cart = this.cart.filter(el => el.id != prod.id)  
    }
    if(number.text == 'Ajouter 1') {
      this.storage.set(prod.name, {...prod, count: prod.count + 1}); 
      this.update(prod, number.value + prod.count) 
    }
    if(number.text == 'Enlever 1') {
      this.storage.set(prod.name, {...prod, count: prod.count + -1});
      this.update(prod, prod.count - number.value)   
    }
  }

  update(prod, value) {
    this.cart = this.cart.filter(el => {
      if(el.id == prod.id) {
        el.count = value
        return el
      }
      return el
    }) 
  }

  async showAlert() {
    console.log("call");
    
    const alert = await this.alertController.create({
      header: 'Envoyer votre commande',
      message: 'Envoyer votre commande de '+ this.getPrice() + '€ à Thibailt',
      buttons: ['Non', 'Oui']
    });
  
    await alert.present();
  }
}


