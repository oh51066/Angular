import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // subskrypcja parametrów ścieżki, pobranie id
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idStr = params.get('id');
      if (idStr !== null) {
        const idx = Number(idStr);
        this.person = this.personService.getByIndex(idx);

        // jeśli nie ma takiej osoby – powrót na listę
        if (!this.person) {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
