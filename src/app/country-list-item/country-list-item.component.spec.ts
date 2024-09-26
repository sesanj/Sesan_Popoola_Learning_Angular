import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListItemComponent } from './country-list-item.component';

describe('CountryListItemComponent', () => {
  let component: CountryListItemComponent;
  let fixture: ComponentFixture<CountryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
