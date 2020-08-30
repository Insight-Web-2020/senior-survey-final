import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CareerComponent } from './career/career.component';
import { AcademicsComponent } from './academics/academics.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PersonalComponent } from './personal/personal.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';
import { OpinionsComponent } from './opinions/opinions.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NavbarComponent,
    CareerComponent,
    AcademicsComponent,
    LifestyleComponent,
    PersonalComponent,
    ExtracurricularsComponent,
    OpinionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
