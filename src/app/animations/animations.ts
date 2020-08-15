import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  animateChild,
  keyframes
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('*<=>*', [
      query(':leave',animate('1s ease-out',keyframes([
        style({opacity:"1",offset:0.0}),
        style({opacity:"0",offset:1.0}),
      ]))),
      query(':enter',animate('1s 1s ease-in',keyframes([
        style({opacity:"0",offset:0.0}),
        style({opacity:"1",offset:1.0}),
      ]))),
    ])
  ]);