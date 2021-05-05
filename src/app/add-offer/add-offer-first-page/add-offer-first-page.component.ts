import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DateAdapter} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import {LocationMapComponent} from '../location-map/location-map.component';



@Component({
  selector: 'app-add-offer-first-page',
  templateUrl: './add-offer-first-page.component.html',
  styleUrls: ['./add-offer-first-page.component.css']
})
export class AddOfferFirstPageComponent implements OnInit {
  locationDTO = {xposition: 52.237049, yposition: 21.017532, cityName: 'Warszawa'};

  offerForm = this.formBuilder.group({
    description: [''],
    title: [''],
    userId: [''],
    salaryTimeUnitDTO: this.formBuilder.group( {
      id: [''],
      name: ['']
    }),
    hasExperience: [''],
    salaryDTO: this.formBuilder.group( {
      minSalary: [''],
      maxSalary: ['']
    }),
    offerLocationDTO: this.formBuilder.group( {
      xposition: [this.locationDTO.xposition],
      yposition: [this.locationDTO.yposition],
      cityName: [this.locationDTO.cityName]
    }),
    dateRangeDTO: this.formBuilder.group( {
      startDate: [''],
      endDate: ['']
    }),
    industryDTO: this.formBuilder.group( {
      id: [''],
      name: ['']
    }),
    offerScheduleDTO: this.formBuilder.group( {
      mondayMorning: [''],
      mondayAfternoon: [''],
      mondayEvening: [''],
      tuesdayMorning: [''],
      tuesdayAfternoon: [''],
      tuesdayEvening: [''],
      wednesdayMorning: [''],
      wednesdayAfternoon: [''],
      wednesdayEvening: [''],
      thursdayMorning: [''],
      thursdayAfternoon: [''],
      thursdayEvening: [''],
      fridayMorning: [''],
      fridayAfternoon: [''],
      fridayEvening: [''],
      saturdayMorning: [''],
      saturdayAfternoon: [''],
      saturdayEvening: [''],
      sundayMorning: [''],
      sundayAfternoon: [''],
      sundayEvening: ['']
    }),
    tagsNames: [''],
  });





  constructor(private formBuilder: FormBuilder,
              private adapter: DateAdapter<any>, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.adapter.setLocale('pl');
  }


  openChoseLocationUp(): void {
    const dialogRef = this.matDialog.open(LocationMapComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      data: this.locationDTO
    });

    dialogRef.afterClosed().subscribe( (results) => {
      this.locationDTO = results;
      this.offerForm.value.offerLocationDTO.xposition = this.locationDTO.xposition;
      this.offerForm.value.offerLocationDTO.yposition = this.locationDTO.yposition;
      this.offerForm.value.offerLocationDTO.cityName = this.locationDTO.cityName;
      console.log(this.offerForm.value);
    });
  }

}
