import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss','contentstyles.css']
})
export class OpinionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
