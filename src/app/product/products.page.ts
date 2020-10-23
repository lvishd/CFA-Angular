import { RestapiService } from '../services/restapi.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {
  constructor(public apirest: RestapiService, private router: Router) { }

  poissons: Array<any>;
  coquillages: Array<any>;
  crustaces: Array<any>;
  promotions: Array<any>;
  
  ngOnInit() {
    this.apirest.getProducts().subscribe(res => {
      this.poissons = res.filter((prod) => prod.category == 0)
      this.coquillages = res.filter((prod) => prod.category == 1)
      this.crustaces = res.filter((prod) => prod.category == 2)
      this.promotions = res.filter((prod) => prod.discount != 0)
    }, err => console.log(err))
    
  }

  categoryParams(data) {
    const navigationExtras: NavigationExtras= {
      state : {
        data: data
      }
    }
    this.router.navigate( ['category'], navigationExtras )
  }
  
  openPoissonWithCategory() {
    this.categoryParams(this.poissons)
  }

  openCoquillageWithCategory() {
    this.categoryParams(this.coquillages)
  }
 
  openCrustaceWithCategory() {
    this.categoryParams(this.crustaces)
  }
  openPromotionWithCategory() {
    this.categoryParams(this.promotions)
  }


}
