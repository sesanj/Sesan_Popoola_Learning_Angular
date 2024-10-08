import { Component } from '@angular/core';
import { CountryListItemComponent } from '../country-list-item/country-list-item.component';
import { NgFor } from '@angular/common';
import { country } from '../data/mock-contents';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CountryListItemComponent, NgFor],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {
  country = country;
}
