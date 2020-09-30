import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../../services/user-api.service';

@Component({
  selector: 'app-add-new-family',
  templateUrl: './add-new-family.component.html',
  styleUrls: ['./add-new-family.component.css']
})
export class AddNewFamilyComponent implements OnInit {
  newFamily = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
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
    education: new FormControl('')
  });

  public Person: {
  'id': number,
  'firstname': string,
  'lastname': string,
  'nickname': string,
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
  date = new FormControl(new Date());
  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): void{
    this.userApiService.getAllUsers()
      .subscribe(
      data => {
        // console.log(data);
        this.persons = data;
        // console.log(this.persons);
      }
    );
  }

  addFamily(): void {
    this.userApiService.addPerson(this.newFamily)
      .subscribe(
        data => {
          this.ngOnInit();
        }
      );
  }

  getErrorMessage(): string{
    if (this.newFamily.controls.firstname.hasError('required')){
      return 'Je moet een voornaam invullen';
    }
  }

  clearInput(): void{
    this.newFamily.controls.firstname.setValue('');
    this.newFamily.controls.lastname.setValue('');
    this.newFamily.controls.nickname.setValue('');
    this.newFamily.controls.birthDate.setValue('');
    this.newFamily.controls.deathDate.setValue('');
    this.newFamily.controls.gender.setValue('');
    this.newFamily.controls.maidenName.setValue('');
    this.newFamily.controls.partner.setValue(null);
    this.newFamily.controls.father.setValue(null);
    this.newFamily.controls.mother.setValue(null);
    this.newFamily.controls.children.setValue(null);
    this.newFamily.controls.stepmothers.setValue(null);
    this.newFamily.controls.stepfathers.setValue(null);
    this.newFamily.controls.profession.setValue('');
    this.newFamily.controls.education.setValue('');
  }
}
