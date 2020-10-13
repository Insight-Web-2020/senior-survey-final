import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';
@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.scss','contentstyles.css']
})
export class ExtracurricularsComponent implements OnInit {

  constructor(public ns: NavigationService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
