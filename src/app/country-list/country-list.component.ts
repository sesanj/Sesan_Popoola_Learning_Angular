import { Component } from '@angular/core';
import { CountryListItemComponent } from '../country-list-item/country-list-item.component';
import { Country } from '../models/country';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CountryListItemComponent, NgFor],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {
  country: Country[] = [
    {
      name: 'Canada',
      population: '38,000,000 Milion',
      gdp: '$2.1 Trillion',
      rating: '7/10',
    },
    {
      name: 'Nigeria',
      population: '218,000,000 Milion',
      gdp: '$472 Billion',
      rating: '5/10',
    },
    {
      name: 'United States',
      population: '333,000,000 Milion',
      gdp: '$25 Trillion',
      rating: '7/10',
    },
    {
      name: 'Singapore',
      population: '5.6,000,000 Milion',
      gdp: '$466 Billion',
      rating: '9/10',
    },
  ];
}
