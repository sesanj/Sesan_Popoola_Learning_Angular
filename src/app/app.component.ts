import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryListItemComponent } from './country-list-item/country-list-item.component';
import { CountriesService } from './services/countries.service';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf,
    NgIf,
    CountryListComponent,
    CountryListItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Country Data';

  country!: Country;

  constructor(private CountriesService: CountriesService) {}

  ngOnInit() {
    this.CountriesService.getCountries().subscribe({
      next: (data: any) => (this.country = data[1]),
      error: (err) => console.error('Error fetching Students', err),
      complete: () => console.log('Student data fetch complete!'),
    });
  }
}
