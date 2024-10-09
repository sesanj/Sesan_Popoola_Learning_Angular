import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() indexEmmiter = new EventEmitter();

  constructor(private CountriesService: CountriesService) {}

  ngOnInit() {
    this.CountriesService.getCountries().subscribe({
      next: (data: Country[]) => (this.allCountries = data),
      error: (err) => console.error('Error fetching Students', err),
      complete: () => console.log('Student data fetch complete!'),
    });
  }

  clickCountry(index: number) {
    this.indexEmmiter.emit(index);
  }
}
