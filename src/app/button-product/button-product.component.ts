import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-product',
  templateUrl: './button-product.component.html',
  styleUrls: ['./button-product.component.scss'],
})
export class ButtonProductComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
