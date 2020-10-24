import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { nextTick } from 'process';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    categories: Array<any> ;
    store: Array<any> = [];

  	constructor(private route: ActivatedRoute, private router: Router, private storage: Storage) {
	    this.route.queryParams.subscribe(params => {
		    if (this.router.getCurrentNavigation().extras.state) {
			    this.categories = this.router.getCurrentNavigation().extras.state.categories
		    }
		});	
  }
  
  add(item) {
    if(!this.inStore(item)) {
      this.storage.set(item.name, item);      
      this.store.push(item)
    } else {
      this.storage.remove(item.name)
      this.store = this.store.filter(el => el.id != item.id)
    }   
  }

  inStore(item) {
    let test = false
    this.store.map(it => {
      if(it.id === item.id) {
        test = true
      }
    })
    return test;
  }

  clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
     
    });  
  }

  // test
  getAll() { 
    console.log(this.store) 
    this.storage.forEach(v => {
      console.log(v);
      
    })
  }

  ngOnInit() {
    this.storage.forEach(v => {
      this.store.push(v)
    })
    console.clear() 
    console.log('init store :');
    console.log(this.store);
  }

}
