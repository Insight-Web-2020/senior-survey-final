import { Component, OnInit } from '@angular/core';
import {slideInAnimation} from '../animations/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations:[
    slideInAnimation
  ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
		// console.log("clicked");
	    document.getElementById("sdnav").style.width = "250px";
	    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
	    document.getElementById("sdnav").style.width = "0";
	    document.body.style.backgroundColor = "rgba(0,0,0,0)";
  }

  prepareRoute(outlet) {
      // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
