import { Component,OnInit } from '@angular/core';
import {fadeIn} from './animations/animations';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
  	fadeIn
  ]
})
export class AppComponent implements OnInit{
  title = 'senior-survey';
  constructor( private ngxService: NgxUiLoaderService){}

  ngOnInit(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);
  }

  prepareRoute(outlet) {
      // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
