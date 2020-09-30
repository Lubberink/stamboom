import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../auth/login/login.component';
import {FormGroup} from '@angular/forms';
import {formatDate} from '@angular/common';
import {toTitleCase} from 'codelyzer/util/utils';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private handleError: any;

  url = 'http://localhost:8080';
  urlTree = 'http://localhost:8081';
  private data: {
    username: string
  };
  private loginData: {
    username: string,
    password: string
  };
  private addPersonForm: {
    firstname: string,
    lastname: string,
    nickname: string,
    birthDate: string,
    deathDate: string,
    gender: string,
    maidenName: string,
    partner: null,
    father: null,
    mother: null,
    children: null,
    stepmothers: null,
    stepfathers: null,
    profession: string,
    education: string,
    creationDate: string
  };
  private editPersonForm: {
    id: number,
    firstname: string,
    lastname: string,
    nickname: string,
    birthDate: string,
    deathDate: string,
    gender: string,
    maidenName: string,
    partner: null,
    father: null,
    mother: null,
    children: null,
    stepmothers: null,
    stepfathers: null,
    profession: string,
    education: string,
    lastModified: string
  };
  private today: Date;
  private jstoday: string;
  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/user/get/0');
  }

  setHeader(): void {
    const headers = new HttpHeaders().set('Authorization', 'auth-toker');
  }

  createUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.data = {
      username: 'gerco19'
    };

    return this.httpClient.post(this.url + '/user/add', this.data, httpOptions);
  }
  login(form: FormGroup): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.loginData = {
      username: form.value.username,
      password: form.value.password
    };
    return this.httpClient.post(this.url + '/user/login', this.loginData, httpOptions);
  }
  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.urlTree + '/person/get/all');
  }
  addPerson(form: FormGroup): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.today = new Date();
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy HH:MM:ss', 'de-at');
    this.addPersonForm = {
      firstname: toTitleCase(form.value.firstname),
      lastname: toTitleCase(form.value.lastname),
      nickname: toTitleCase(form.value.nickname),
      birthDate: form.value.birthDate,
      deathDate: form.value.deathDate,
      gender: form.value.gender,
      maidenName: toTitleCase(form.value.maidenName),
      partner: form.value.partner,
      father: form.value.father,
      mother: form.value.mother,
      children: form.value.children,
      stepfathers: form.value.stepfathers,
      stepmothers: form.value.stepmothers,
      profession: toTitleCase(form.value.profession),
      education: toTitleCase(form.value.education),
      creationDate: this.jstoday
    };
    console.log(this.addPersonForm);
    return this.httpClient.post(this.urlTree + '/person/add', this.addPersonForm, httpOptions);
  }
  updatePerson(form: FormGroup): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.today = new Date();
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy HH:MM:ss', 'de-at');
    this.editPersonForm = {
      id: form.value.id,
      firstname: toTitleCase(form.value.firstname),
      lastname: toTitleCase(form.value.lastname),
      nickname: toTitleCase(form.value.nickname),
      birthDate: form.value.birthDate,
      deathDate: form.value.deathDate,
      gender: form.value.gender,
      maidenName: toTitleCase(form.value.maidenName),
      partner: form.value.partner,
      father: form.value.father,
      mother: form.value.mother,
      children: form.value.children,
      stepfathers: form.value.stepfathers,
      stepmothers: form.value.stepmothers,
      profession: toTitleCase(form.value.profession),
      education: toTitleCase(form.value.education),
      lastModified: this.jstoday
    };
    console.log(this.addPersonForm);
    return this.httpClient.post(this.urlTree + '/person/update', this.editPersonForm, httpOptions);
  }
}
