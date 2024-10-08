import { Component } from '@angular/core';
import { CountryListItemComponent } from '../country-list-item/country-list-item.component';
import { NgFor } from '@angular/common';
import { countries } from '../data/mock-contents';
import { CountriesService } from '../services/countries.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CountryListItemComponent, NgFor],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {
  allCountries: Country[] = [];

  constructor(private CountriesService: CountriesService) {}
}
