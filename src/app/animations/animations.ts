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

export const slideInAnimation =(
    trigger('routeAnimations', [
     transition('contentpage<=>careerpage',[style({transform:'translateY(500px)',opacity:'0'}),animate('0.5s ease')]),   //works!!

     //  transition('careerpage=>contentpage,rulesIdPage=>basicPage',[
     //    style({transform:'translateX(-500px)',opacity:'0'}),
     //    animate('0.25s  ease-out')
     // ])
  ])
);

export const fadeIn = (
  trigger('mainRouteAnimations',[
    transition('homepage<=>indexpage',[style({opacity:'0.4'}),animate('0.25s ease-in')]),   //works!!
  ])
)