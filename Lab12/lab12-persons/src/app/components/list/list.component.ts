import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    // wczytanie danych z localStorage
    this.persons = this.personService.getAll();
  }

  // usunięcie elementu o danym indeksie
  delete(index: number): void {
    this.personService.deleteByIndex(index);
    this.persons = this.personService.getAll();
  }
}
