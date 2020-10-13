import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: [
  	'./career.component.scss',
  	'./contentstyles.css'
  ]
})
export class CareerComponent implements OnInit {

  constructor(public ns: NavigationService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
