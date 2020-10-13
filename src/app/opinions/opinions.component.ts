import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss','contentstyles.css']
})
export class OpinionsComponent implements OnInit {

  constructor(public ns:NavigationService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
