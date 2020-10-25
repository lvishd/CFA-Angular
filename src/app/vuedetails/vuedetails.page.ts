import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-vuedetails',
  templateUrl: './vuedetails.page.html',
  styleUrls: ['./vuedetails.page.scss'],
})
export class VuedetailsPage implements OnInit {

  details: Array<any> ;

  constructor( private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state.details
        console.log(this.details)
      }
    });	
  }




  
  ngOnInit(){}


  

}