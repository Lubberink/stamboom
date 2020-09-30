import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  addFamily: boolean;
  editFamily: boolean;

  forms: any;
  constructor() {
    this.forms = [
      {
        label: 'familielid toevoegen',
        id: 0
      },
      {
        label: 'familielid aanpassen',
        id: 1
      },
      {
        label: 'familieleden bekijken',
        id: 2
      }
    ];
  }

  ngOnInit(): void {
    console.log(this.forms);
  }

}
