import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
