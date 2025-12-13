import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Person, PersonService } from '../../services/person.service';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  person: Person = {
    address: {}
  };

  constructor(
    private service: PersonService,
    private router: Router
  ) {}

  save(): void {
    this.service.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
