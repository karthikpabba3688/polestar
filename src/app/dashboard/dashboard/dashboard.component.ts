import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('item1', {static:true}) private item1: ElementRef;
  @ViewChild('item2', {static:true}) private item2: ElementRef;
  @ViewChild('item21', {static:true}) private item21: ElementRef;
  @ViewChild('item22', {static:true}) private item22: ElementRef;
  @ViewChild('item3', {static:true}) private item3: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  remove(ele){
    switch(ele) { 
      case 'item1': { 
         this.item1.nativeElement.remove();
         break; 
      } 
      case 'item21':{
        this.item21.nativeElement.remove();
        if(document.getElementById('item22') == null) this.item2.nativeElement.remove();
        break;
      }
      case 'item22':{
        this.item22.nativeElement.remove();
        if(document.getElementById('item21') == null) this.item2.nativeElement.remove();
        break;
      }
      case 'item3': { 
        this.item3.nativeElement.remove();
        break; 
     }  
      
   }
    
  }
  
  
}
