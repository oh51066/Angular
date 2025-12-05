import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../services/random';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class RandomComponent {
  @Input() max = 10;
  current = 0;
  comment = '';
  constructor(private randomService: RandomService) {}

  generate() {
    this.current = this.randomService.getRandom(this.max);
    if (this.current <= this.max * 0.5) {
      this.comment = 'Liczba jest mniejsza lub równa połowie zakresu.';
    } else {
      this.comment = 'Liczba jest większa niż połowa zakresu.';
    }
  }

  get isLow(): boolean {
    return this.current <= this.max * 0.5;
  }
}
