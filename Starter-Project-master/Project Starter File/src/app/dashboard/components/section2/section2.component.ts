import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
