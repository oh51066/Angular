import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { PersonResource, PersonService } from '../../services/person.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  person?: PersonResource;

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/']);
      return;
    }

    this.service.getById(id).subscribe({
      next: p => this.person = p,
      error: () => this.router.navigate(['/'])
    });
  }
}
