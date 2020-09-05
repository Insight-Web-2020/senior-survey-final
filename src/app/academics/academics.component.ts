import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss',
  './contentstyles.css',
  ]
})
export class AcademicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
