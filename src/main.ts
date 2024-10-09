import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CountryListComponent } from './app/country-list/country-list.component';
import { CountryListItemComponent } from './app/country-list-item/country-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:name', component: CountryListItemComponent },
  { path: 'modify-country', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
