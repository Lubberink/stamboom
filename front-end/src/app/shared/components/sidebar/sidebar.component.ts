import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name = 'Gerco Lubberink';
  sumFamily = 13;
  generations = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
