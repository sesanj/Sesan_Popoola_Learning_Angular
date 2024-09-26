import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Country Data';
}
