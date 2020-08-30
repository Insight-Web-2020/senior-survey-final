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

var transitions1='academicspage=>*,careerpage=>lifestylepage,careerpage=>personalpage,careerpage=>extracurricularspage,careerpage=>opinionspage,lifestylepage=>personalpage,lifestylepage=>extracurricularspage,lifestylepage=>opinionspage,personalpage=>extracurricularspage,personalpage=>opinionspage,extracurricularspage=>opinionspage';
var transitions2='*=>academicspage,lifestylepage=>careerpage,personalpage=>lifestylepage,personalpage=>careerpage,extracurricularspage=>personalpage,extracurricularspage=>lifestylepage,extracurricularspage=>careerpage,opinionspage=>*';

export const slideInAnimation =(
    trigger('routeAnimations', [
     transition(transitions1,[style({transform:'translateY(500px)',opacity:'0'}),animate('0.15s ease')]),   //works!!
     transition(transitions2,[style({transform:'translateY(-500px)',opacity:'0'}),animate('0.15s ease')]),   //works!!
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