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
    	{ title: "Product Design", name: '../assets/design.jpg', label: "Keeping in mind how the design will represent the product." },
    	{ title: "User Focused", name: '../assets/user.jpg', label: "Figuring out what features create value." },
      { title: "Task Oriented", name: '../assets/task.jpg', label: "Strive to produce at a high level, backed with strong work ethic." },
      { title: "Self Motivated Learner", name: '../assets/motivated.jpeg', label: "Ability to pick up new technologies and apply them to development." },
      { title: "Positive Attitude" , name: '../assets/positive.jpg', label: "Always contributing to a positive environment and going the distance to get the job done." },
      { title: "Team player", name: '../assets/team.jpg', label: "Always open to collaborate with others and learn from each other." },
    	
    ];
  }

  ngOnInit() {
  	
  }
  	
}