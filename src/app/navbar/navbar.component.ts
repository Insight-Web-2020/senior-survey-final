import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
  	'./navbar.component.scss',
  	'./navbar-fixed-left.min.css',
  	'../content/bootstrap-lx.min.css',
  	'../content/contentstyles.css',
  	'../content/docs.css'
  ],
  encapsulation: ViewEncapsulation.None, 
})
export class NavbarComponent implements OnInit {
  loadAPI: Promise<any>;
  constructor() { 
  		this.loadAPI = new Promise((resolve) => {
	        this.loadScript();
	        resolve(true);
	    });
  }

  ngOnInit(): void {
  }

 loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["https://buttons.github.io/buttons.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

}
