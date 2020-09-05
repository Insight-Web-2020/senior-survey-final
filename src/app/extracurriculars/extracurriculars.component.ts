import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.scss','contentstyles.css']
})
export class ExtracurricularsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }

  navigateWithin(id){
  	var el = document.getElementById(id);
  	el.scrollIntoView();
  }

}
