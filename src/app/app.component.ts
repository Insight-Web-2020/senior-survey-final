import { Component } from '@angular/core';
import {fadeIn} from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
  	fadeIn
  ]
})
export class AppComponent {
  title = 'senior-survey';
  prepareRoute(outlet) {
      console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
