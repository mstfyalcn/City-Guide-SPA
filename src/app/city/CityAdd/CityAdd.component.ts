import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { City } from 'src/app/models/city';
import { __assign } from 'tslib';

@Component({
  selector: 'app-CityAdd',
  templateUrl: './CityAdd.component.html',
  styleUrls: ['./CityAdd.component.css'],
  providers: [CityService],
})
export class CityAddComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private formbuilder: FormBuilder
  ) {}
  city?: City;
  cityAddForm?: FormGroup;

  createCityForm() {
    this.cityAddForm = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createCityForm();
  }
  add() {
    if (this.cityAddForm?.valid) {
      this.city = Object.assign({}, this.cityAddForm.value);
     
      this.cityService.add(this.city);
    }
  }
}
