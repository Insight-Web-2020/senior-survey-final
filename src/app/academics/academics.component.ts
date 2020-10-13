import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss',
  './contentstyles.css',
  ]
})
export class AcademicsComponent implements OnInit {

  constructor(public ns: NavigationService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
