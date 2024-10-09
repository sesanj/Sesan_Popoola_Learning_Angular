import { Component, input, Input } from '@angular/core';
import { Country } from '../models/country';
import { NgClass } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-country-list-item',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './country-list-item.component.html',
  styleUrl: './country-list-item.component.scss',
})
export class CountryListItemComponent {
  @Input() country?: Country;
}
