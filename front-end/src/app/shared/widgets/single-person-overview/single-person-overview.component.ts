import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../../../forms/edit-family/edit-family.component';
import {UserApiService} from '../../../services/user-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-single-person-overview',
  templateUrl: './single-person-overview.component.html',
  styleUrls: ['./single-person-overview.component.css']
})
export class SinglePersonOverviewComponent implements OnInit {
  options: Person[] = [];
  selectedPerson: Person;
  filteredOptions: Observable<Person[]>;
  public editFamily = new FormGroup({
    personToEdit: new FormControl('')
  });
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
  }];
  private personDetails: any;
  private personRelationDetails: any;
  constructor(private userApiService: UserApiService) {
    this.getAllUsers();
    this.filteredOptions = this.editFamily.controls.personToEdit.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.firstname),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  private _filter(value: string): Person[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.firstname.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(person: Person): string {
    return person && person.firstname ? person.firstname : '';
  }

  ngOnInit(): void {
  }
  getAllUsers(): void{
    this.userApiService.getAllUsers()
      .subscribe(
        data => {
          this.options = data;
          this.persons = data;
        }
      );
  }
  selectedPersonF(person): void {
    this.selectedPerson = person;
    console.log(person);
    this.personDetails = [
      {
        name: 'Naam',
        value: this.selectedPerson.firstname + ' ' + this.selectedPerson.lastname
      },
      {
      name: 'Geslacht',
      value: this.selectedPerson.gender
      },
      {
        name: 'Opleiding',
        value: this.selectedPerson.education
      },
      {
        name: 'Beroep',
        value: this.selectedPerson.profession
      },
      {
        name: 'Vader',
        value: this.selectedPerson.father
      },
      {
        name: 'Moeder',
        value: this.selectedPerson.mother
      }
    ];
  }

}
