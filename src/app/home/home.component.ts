import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

	openNav() {
		document.getElementById("sdnav").style.width = "250px";
	}

	closeNav() {
	    document.getElementById("sdnav").style.width = "0";
	}

	goTo(link){
		this.router.navigate([link]);
	}

}
