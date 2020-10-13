import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';
@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss',
  'contentstyles.css'
  ]
})
export class LifestyleComponent implements OnInit {

  constructor(public ns: NavigationService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
