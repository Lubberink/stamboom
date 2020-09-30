import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserApiService} from '../../../services/user-api.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-family-in-table',
  templateUrl: './family-in-table.component.html',
  styleUrls: ['./family-in-table.component.css']
})

export class FamilyInTableComponent implements OnInit {

  public Person: {
    'id': number,
    'firstname': string,
    'lastname': string,
    'birthDate': string,
    'deathDate': string,
    'gender': string,
    'maidenName': string,
    'partner': string,
    'father': string,
    'mother': string,
    'children': string,
    'stepmothers': string,
    'stepfathers': string,
    profession: string,
    education: string
  };
  public persons: [{
    'id': number,
    'firstname': string,
    'lastname': string,
    'birthDate': string,
    'deathDate': string,
    'gender': string,
    'maidenName': string,
    'partner': string,
    'father': string,
    'mother': string,
    'children': string,
    'stepmothers': string,
    'stepfathers': string,
    profession: string,
    education: string
  }];
  displayedColumns: string[] = ['firstname', 'lastname', 'birthDate', 'gender'];
  dataSource = new MatTableDataSource<Person>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userApiService: UserApiService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userApiService.getAllUsers()
      .subscribe(
        data => {
          console.log(data);
          this.persons = data;
          console.log(this.persons);
          this.dataSource = new MatTableDataSource<Person>(this.persons);
        }
      );
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface Person {
  'id': number;
  'firstname': string;
  'lastname': string;
  'birthDate': string;
  'deathDate': string;
  'gender': string;
  'maidenName': string;
  'partner': string;
  'father': string;
  'mother': string;
  'children': string;
  'stepmothers': string;
  'stepfathers': string;
  profession: string;
  education: string;
}
