import {Component, HostListener, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {UserApiService} from '../../../services/user-api.service';
import {Person, PersonObj} from '../../shared.module';

@Component({
  selector: 'app-people-alive',
  templateUrl: './people-alive.component.html',
  styleUrls: ['./people-alive.component.css']
})
export class PeopleAliveComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  private persons: [Person];
  private personDates: DateArrObj[] = [];
  private graphData: DataForGraph[] = [];

  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Hoeveelheid mannen en vrouwen door de jaren heen'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      xAxis: {
        categories: ['1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020']
      },
      yAxis: {
        title: {
          text: 'Hoeveelheid mannen en vrouwen'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Mannen',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'Vrouwen',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    };

    HC_exporting(this.Highcharts);

  //   setTimeout(() => {
  //     Highcharts.chart().setSize(100);
  //   }, 300);
  }

  getAllUsers(): void{
    this.userApiService.getAllUsers()
      .subscribe(
        data => {
          this.persons = data;
          this.getDates();
          this.getGraphData();
        }
      );
  }
  getDates(): void {
    for (const person of this.persons){
      const obj = new DateArrObj();
      obj.name = person.firstname + ' ' + person.lastname;
      obj.gender = person.gender;
      obj.birthDate = person.birthDate;
      obj.deathDate = person.deathDate;
      obj.birthYear = this.calculateBirthYear(person.birthDate);
      obj.deathYear = this.calculateDeathYear(person.deathDate);
      obj.yearsAlive = this.calculateYearsAlive(obj.birthYear, obj.deathYear);
      this.personDates.push(obj);
    }
    console.log(this.personDates);
  }
  getGraphData(): void {
    for (const personDate of this.personDates){
      let yearHasToBeAdded = true;
      for (const data of this.graphData){
        if (personDate.birthYear === data.year){
          yearHasToBeAdded = false;
          data.quantity += 1;
        }
      }
      if (yearHasToBeAdded){
        const obj = new DataForGraph();
        obj.year = personDate.birthYear;
        obj.quantity = 1;
        this.graphData.push(obj);

      }
    }
    console.log(this.graphData);
  }
  // genderCalc(receivedData, graphData): void {
  //   if (gra)
  //   if (receivedData.gender === 'M'){
  //     data.quantityMale
  //   }
  // }
  calculateYearsAlive(birthYear, deathYear): number {
    if (deathYear === 0){
      return (new Date()).getFullYear() - birthYear;
    }
    return deathYear - birthYear;
  }

  calculateBirthYear(birthDate): number {
    const beginIndex = birthDate.length - 4;
    return (birthDate[beginIndex] + birthDate[beginIndex + 1]
      + birthDate[beginIndex + 2] + birthDate[beginIndex + 3]);
  }

  calculateDeathYear(deathDate): number {
    if (deathDate === ''){
      return 0;
    }
    const beginIndex = deathDate.length - 4;
    return (deathDate[beginIndex] + deathDate[beginIndex + 1]
      + deathDate[beginIndex + 2] + deathDate[beginIndex + 3]);
  }

}
export interface DateArr {
  birthdate: string;
  deathDate: string;
  yearsAlive: number;
}

export class DateArrObj {
  name: string;
  birthDate: string;
  deathDate: string;
  yearsAlive: number;
  birthYear: number;
  deathYear: number;
  gender: string;
}

export class DataForGraph {
  year: number;
  quantity: number;
  quantityMale: number;
  quantityFemale: number;
}
