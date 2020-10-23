import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.scss'],
})
export class ButtonBaseComponent implements OnInit {

  @Input() name: string;
  @Input() uri: string;

  constructor() { }

  ngOnInit() {}

}
