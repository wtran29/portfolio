import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  items: Array<any> = [];
  constructor() { 
    this.items = [
    	{ name: '../assets/memory.jpg' },
    	{ name: '../assets/rome4.jpg' },
    	{ name: '../assets/rome2.jpg' },
    	{ name: '../assets/vatican2.jpg' },
    	{ name: '../assets/venice2.jpg' },
    	{ name: '../assets/me.jpg' },
    	{ name: '../assets/florence.jpg' },
    	{ name: '../assets/forum.jpg' },
    	{ name: '../assets/forum2.jpg' },
    ];
  }

  ngOnInit() {
  	
  }
  	
}