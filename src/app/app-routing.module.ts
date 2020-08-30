import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {ContentComponent} from './content/content.component';
import {CareerComponent} from './career/career.component';
import {AcademicsComponent} from './academics/academics.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PersonalComponent } from './personal/personal.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';
import { OpinionsComponent } from './opinions/opinions.component';

const routes: Routes = [
	{path:'',component:HomeComponent,data:{animation:'homepage'}},
	{
		path:'index',component:IndexComponent,data:{animation:'indexpage'},
		children:[
			{path:'career',component:CareerComponent,data:{animation:'careerpage'}},
			{path:'academics',component:AcademicsComponent,data:{animation:'academicspage'}},
			{path:'lifestyle',component:LifestyleComponent,data:{animation:'lifestylepage'}},
			{path:'personal',component:PersonalComponent,data:{animation:'personalpage'}},
			{path:'extracurricular',component:ExtracurricularsComponent,data:{animation:'extracurricularpage'}},
			{path:'opinions',component:OpinionsComponent,data:{animation:'opinionspage'}},
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
