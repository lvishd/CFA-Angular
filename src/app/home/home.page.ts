import { RestapiService } from './../services/restapi.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
    name: 'Recettes',
    uri: '../../assets/recette.png'
  }
  buttonRestaurants = {
    name: 'Restaurants',
    uri: '../../assets/restaurant.png'
  }
  buttonContact = {
    name : 'Contact',
    uri: '../../assets/tourteau.png'
  } 
  
  constructor(public apirest: RestapiService, private router: Router) { }

  bateaux: Array<any>;
  restaurants: Array<any>;
  recettes: Array<any>;
  promotions: Array<any>;
  
  ngOnInit() {
    this.apirest.getElements().subscribe(res => {
      this.bateaux = res.filter((prod) => prod.category == "bateau")
      this.restaurants = res.filter((prod) => prod.category == "restau")
      this.recettes = res.filter((prod) => prod.category == "recette")
    }, err => console.log(err))
    
  }

  categoryParams(data, poptext,pitre) {
    const navigationExtras: NavigationExtras= {
      state : {
        categories: data,
        toptext: poptext,
        titre : pitre,
        
      }
    }
    this.router.navigate( ['template'], navigationExtras )
  }
  
  openTemplateWithBateaux() {
    this.categoryParams(this.bateaux, "Nos bateaux partenaires", "Toutes les eaux mènent à Thibault \n 06.63.99.99.78 \n lebateaudethibault@gmail.com \n www.facebook.com/lebateaudethibault")
  }

  openTemplateWithRestaurants() {
    this.categoryParams(this.restaurants, "Restaurants partenaires","Tous les restaurants partenaires avec le bateau de Thibault \n 06.63.99.99.78 \n lebateaudethibault@gmail.com \n www.facebook.com/lebateaudethibault")
  }
 
  openTemplateWithRecettes() {
    this.categoryParams(this.recettes, "Nos recettes","Toutes les recettes du bateau de Thibault \n 06.63.99.99.78 \n lebateaudethibault@gmail.com \n www.facebook.com/lebateaudethibault")
  }
 

}
