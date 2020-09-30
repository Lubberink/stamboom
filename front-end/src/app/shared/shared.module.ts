import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { PeopleAliveComponent } from './widgets/people-alive/people-alive.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {CardComponent} from './widgets/card/card.component';
import {AddNewFamilyComponent} from '../forms/add-new-family/add-new-family.component';
import {EditFamilyComponent} from '../forms/edit-family/edit-family.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FamilyInTableComponent } from './widgets/family-in-table/family-in-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import { SinglePersonOverviewComponent } from './widgets/single-person-overview/single-person-overview.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PeopleAliveComponent,
    CardComponent,
    AddNewFamilyComponent,
    EditFamilyComponent,
    FamilyInTableComponent,
    SinglePersonOverviewComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatSortModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PeopleAliveComponent,
    CardComponent,
    AddNewFamilyComponent,
    EditFamilyComponent,
    FamilyInTableComponent,
    SinglePersonOverviewComponent
  ]
})
export class SharedModule { }

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

export class PersonObj {
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
