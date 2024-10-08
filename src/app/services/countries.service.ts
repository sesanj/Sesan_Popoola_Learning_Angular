import { Injectable } from '@angular/core';
import { countries } from '../data/mock-contents';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of(countries);
  }
}
