import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 userData=[
   {
     number:1,
     Name:'Elite Admin',
     Status:'Sale',
     Date:'April 18,2017',
     Price:'$24'
   },
   {
    number:2,
    Name:'Pro Admin',
    Status:'Extended',
    Date:'April 20,2017',
    Price:'$344'
  },
  {
    number:3,
    Name:'Medical Officer',
    Status:'Extended',
    Date:'April 18,2017',
    Price:'$24'
  },
  {
    number:4,
    Name:'Elite Admin',
    Status:'Tax',
    Date:'April 29,2017',
    Price:'$34'
  },
  {
    number:5,
    Name:'Digital Agency PSD',
    Status:'Sale',
    Date:'April 18,2017',
    Price:'$333'
  },
  {
    number:6,
    Name:'Helping Hand',
    Status:'member',
    Date:'April 28,2017',
    Price:'$24'
  },
  {
    number:7,
    Name:'Ampie Admin',
    Status:'Extended',
    Date:'April 18,2017',
    Price:'$3444'
  },
  {
    number:8,
    Name:'Elite Admin',
    Status:'Sale',
    Date:'April 18,2017',
    Price:'$24'
  }

 ]

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

  ngOnInit() {
  }

}
