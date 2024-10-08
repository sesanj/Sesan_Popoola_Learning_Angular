import { Injectable } from '@angular/core';
import { countries } from '../data/mock-contents';
import { find, Observable, of } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  country: Country[] = countries;

  getCountries(): Observable<Country[]> {
    return of(countries);
  }

  getCountryById(countryId: number): Observable<Country | undefined> {
    const country = this.country.find((country) => country.id === countryId);

    return of(country);
  }

  addCountry(addCountry: Country): Observable<Country[]> {
    this.country.push(addCountry);
    const country: Country[] = this.country;
    return of(country);
  }

  updateStudent(updateCountry: Country): Observable<Country[]> {
    const index = this.country.findIndex(
      (country) => country.id === updateCountry.id
    );

    if (index !== -1) {
      this.country[index] = updateCountry;
    }
    return of(this.country);
  }

  deleteCountry(countryId: number): Observable<Country[]> {
    this.country = this.country.filter((country) => country.id !== countryId);

    return of(this.country);
  }
}
