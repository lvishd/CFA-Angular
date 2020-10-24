import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { NavigationEnd, Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Array<any> = [];
  
  constructor( private router: Router, private storage: Storage,public pickerCtrl: PickerController) { 
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

  async openPicker(prod) {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: value => {
            this.actionPiker(value.number, prod)
          }
        }
      ],
      columns: [
        {
          name: 'number',
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
    if(['1','2','3','4','5'].includes(number.text)) {
      this.storage.remove(prod.name)
      this.storage.set(prod.name, {...prod, count: number.value});  
      this.update(prod, number.value)
    }
    if(number.text == '0') {
      this.storage.remove(prod.name) 
      this.cart = this.cart.filter(el => el.id != prod.id)  
    }
    if(number.text == 'Ajouter 1') {
      this.storage.remove(prod.name)
      this.storage.set(prod.name, {...prod, count: prod.count + 1}); 
      this.update(prod, number.value + prod.count) 
    }
    if(number.text == 'Enlever 1') {
      this.storage.remove(prod.name)
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

}
