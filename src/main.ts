import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CountryListComponent } from './app/country-list/country-list.component';
import { CountryListItemComponent } from './app/country-list-item/country-list-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:name', component: CountryListItemComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
