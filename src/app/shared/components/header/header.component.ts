import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Array<any> = [
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Unit', route: '/unit' },
    { name: 'Report', route: '/report' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
