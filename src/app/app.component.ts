import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Family } from './models/family';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = "James Paul's Family";

  member1: Family = {
    name: 'James Paul',
    age: 48,
    title: 'Father',
    occupation: 'Engineer',
    showPhoneNumber: false,
  };
  member2: Family = {
    name: 'Vicky Paul',
    age: 45,
    title: 'Mother',
    occupation: 'Accountant',
    showPhoneNumber: false,
  };
  member3: Family = {
    name: 'Jonathan Paul',
    age: 22,
    title: 'Son',
    occupation: 'Software Developer',
    phone_number: '+1 146-323-189',
    showPhoneNumber: false,
  };
  member4: Family = {
    name: 'Emily Paul',
    age: 19,
    title: 'Daughter',
    occupation: 'Singer',
    phone_number: '+1 305-999-073',
    showPhoneNumber: false,
  };
  member5: Family = {
    name: 'Patrick Vaugh',
    age: 49,
    title: 'Uncle',
    occupation: 'Doctor',
    showPhoneNumber: false,
  };
  member6: Family = {
    name: 'Cindy Walker',
    age: 39,
    title: 'Aunty',
    occupation: 'Fashion Designer',
    showPhoneNumber: false,
  };

  allMembers: Family[] = [
    this.member1,
    this.member2,
    this.member3,
    this.member4,
    this.member5,
    this.member6,
  ];

  showPN(member: Family): void {
    member.showPhoneNumber = !member.showPhoneNumber;
  }
}
