import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: [
  	'./career.component.scss',
  	'./contentstyles.css'
  ]
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
