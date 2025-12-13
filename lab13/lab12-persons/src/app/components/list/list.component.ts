import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonResource, PersonService } from '../../services/person.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: PersonResource[] = [];
  errorMsg = '';

  constructor(public service: PersonService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: p => this.persons = p,
      error: () => this.errorMsg = 'Błąd pobierania danych'
    });
  }

  delete(p: PersonResource): void {
    this.service.delete(p).subscribe({
      next: () => {
        this.persons = this.persons.filter(x => x !== p);
      },
      error: () => this.errorMsg = 'Błąd usuwania'
    });
  }
}
