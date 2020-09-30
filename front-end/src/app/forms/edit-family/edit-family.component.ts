import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UserApiService} from '../../services/user-api.service';

@Component({
  selector: 'app-edit-family',
  templateUrl: './edit-family.component.html',
  styleUrls: ['./edit-family.component.css']
})
export class EditFamilyComponent implements OnInit {
  public editFamily = new FormGroup({
    personToEdit: new FormControl(''),
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    nickname: new FormControl(''),
    birthDate: new FormControl(''),
    deathDate: new FormControl(''),
    gender: new FormControl(''),
    maidenName: new FormControl(''),
    partner: new FormControl(null),
    father: new FormControl(null),
    mother: new FormControl(null),
    children: new FormControl(null),
    stepmothers: new FormControl(null),
    stepfathers: new FormControl(null),
    profession: new FormControl(''),
    education: new FormControl(''),
    creationDate: new FormControl('')
  });
  options: Person[] = [];
  filteredOptions: Observable<Person[]>;
  public persons: [{}];
  private choosenPerson: '';
  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void{
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
  getAllUsers(): void{
    this.userApiService.getAllUsers()
      .subscribe(
        data => {
          this.options = data;
          this.persons = data;
        }
      );
  }

  displayFn(person: Person): string {
    return person && person.firstname ? person.firstname : '';
  }
  fillInformation(person): void {
    console.log(person);
    this.editFamily.controls.id.setValue(person.id);
    this.editFamily.controls.firstname.setValue(person.firstname);
    this.editFamily.controls.lastname.setValue(person.lastname);
    this.editFamily.controls.nickname.setValue(person.nickname);
    this.editFamily.controls.birthDate.setValue(person.birthDate);
    this.editFamily.controls.deathDate.setValue(person.deathDate);
    this.editFamily.controls.gender.setValue(person.gender);
    this.editFamily.controls.maidenName.setValue(person.maidenName);
    this.editFamily.controls.partner.setValue(person.partner);
    this.editFamily.controls.father.setValue(person.father);
    this.editFamily.controls.mother.setValue(person.mother);
    this.editFamily.controls.children.setValue(person.children);
    this.editFamily.controls.stepmothers.setValue(person.stepmothers);
    this.editFamily.controls.stepfathers.setValue(person.stepfathers);
    this.editFamily.controls.profession.setValue(person.profession);
    this.editFamily.controls.education.setValue(person.education);
    this.editFamily.controls.creationDate.setValue(person.creationDate);
  }
  // tslint:disable-next-line:typedef
  compareCategoryObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id === object2.id;
  }
  // tslint:disable-next-line:typedef
  editPerson(){
    this.userApiService.updatePerson(this.editFamily).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
    });
  }
  clearInput(): void{
    this.editFamily.controls.firstname.setValue('');
    this.editFamily.controls.lastname.setValue('');
    this.editFamily.controls.nickname.setValue('');
    this.editFamily.controls.birthDate.setValue('');
    this.editFamily.controls.deathDate.setValue('');
    this.editFamily.controls.gender.setValue('');
    this.editFamily.controls.maidenName.setValue('');
    this.editFamily.controls.partner.setValue(null);
    this.editFamily.controls.father.setValue(null);
    this.editFamily.controls.mother.setValue(null);
    this.editFamily.controls.children.setValue(null);
    this.editFamily.controls.stepmothers.setValue(null);
    this.editFamily.controls.stepfathers.setValue(null);
    this.editFamily.controls.profession.setValue('');
    this.editFamily.controls.education.setValue('');
  }
}

export interface Person {
  'id': number;
    'firstname': string;
    'lastname': string;
    'nickname': string;
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
  creationDate: string;
}
