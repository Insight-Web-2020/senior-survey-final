import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss','contentstyles.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
