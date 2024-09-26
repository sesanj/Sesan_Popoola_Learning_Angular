import { Component, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-list-item',
  standalone: true,
  imports: [],
  templateUrl: './country-list-item.component.html',
  styleUrl: './country-list-item.component.scss',
})
export class CountryListItemComponent {
  @Input() country?: Country;
}
