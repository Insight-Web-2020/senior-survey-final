import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {ContentComponent} from './content/content.component';
import {CareerComponent} from './career/career.component';
import {AcademicsComponent} from './academics/academics.component';

const routes: Routes = [
	{path:'',component:HomeComponent,data:{animation:'homepage'}},
	{
		path:'index',component:IndexComponent,data:{animation:'indexpage'},
		children:[
			{path:'career',component:CareerComponent,data:{animation:'careerpage'}},
			{path:'academics',component:AcademicsComponent,data:{animation:'academicspage'}},
			{path:'lifestyle',component:AcademicsComponent,data:{animation:'lifestylepage'}},
			{path:'personal',component:AcademicsComponent,data:{animation:'personalpage'}},
			{path:'extracurricular',component:AcademicsComponent,data:{animation:'extracurricularpage'}},
			{path:'opinions',component:AcademicsComponent,data:{animation:'opinionspage'}},
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
