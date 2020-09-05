import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss',
  'contentstyles.css'
  ]
})
export class LifestyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
