import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  buttonPromo = {
    name: 'Produits et promotions',
    uri: '../../assets/poisson.png'
  };
  buttonBateau = {
    name: 'Bateaux',
    uri: '../../assets/ancre.png'
  }
  buttonRecettes = {
    name: 'Restanrants',
    uri: '../../assets/restaurant.png'
  }
  buttonRestaurants = {
    name: 'Recettes',
    uri: '../../assets/recette.png'
  }
  buttonContact = {
    name : 'Contact',
    uri: '../../assets/tourteau.png'
  }
  constructor() {}

}
