import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  projectData=[
    {
      Assaigned:'Junil Joshi',
      Name:'Elite Admin',
      Priority:'Low',
      Budget:'$5.3'
    },
    {
     Assaigned:'Andrew',
     Name:'Real Home',
     Priority:'Mid',
     Budget:'$5.5'
   },
   {
     Assaigned:'Jack',
     Name:'Admin',
     Priority:'Low',
     Budget:'$2.3'
   },
   {
     Assaigned:'Justin',
     Name:'Helping Hands',
     Priority:'High',
     Budget:'$10.3'
   },
   {
     Assaigned:'Jackie',
     Name:'Admin',
     Priority:'Low',
     Budget:'$2.3'
   },
  ]
  blogImg = "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Chandrabhaga-Beach-.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
