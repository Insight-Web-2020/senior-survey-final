import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {ContentComponent} from './content/content.component';


const routes: Routes = [
	{path:'',component:HomeComponent,data:{animation:'homepage'}},
	{
		path:'index',component:IndexComponent,data:{animation:'indexpage'},
		children:[
			{path:'content',component:ContentComponent,data:{animation:'contentpage'}}
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
