import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavigationExtras } from '@angular/router';
import { RestapiService } from './../services/restapi.service';


@Component({
  selector: 'app-product',
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss'],
})
export class TemplatePage implements OnInit {

  categories: Array<any> ;
  toptext : string;
  titre : string;

  constructor(public apirest: RestapiService, private route: ActivatedRoute, private router: Router, private storage: Storage) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.categories = this.router.getCurrentNavigation().extras.state.categories
        this.toptext=this.router.getCurrentNavigation().extras.state.toptext
        this.titre=this.router.getCurrentNavigation().extras.state.titre



      }
      console.log(this.categories)
      console.log(this.toptext)
      console.log(this.titre)


    });	
  }




  ngOnInit() {

  }

  

  categoryParams(data) {
    const navigationExtras: NavigationExtras= {
      state : {
        details: data
      }
    }
    this.router.navigate( ['vuedetails'], navigationExtras )
  }
  

  openVueDetails(item){

    this.categoryParams(item)

  }

}
