import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-cart',
  templateUrl: './button-cart.component.html',
  styleUrls: ['./button-cart.component.scss'],
})
export class ButtonCartComponent implements OnInit {
  @Input() name: string
  @Input() price: number
  @Input() count: number
  
  constructor() { }

  ngOnInit() {}

}
