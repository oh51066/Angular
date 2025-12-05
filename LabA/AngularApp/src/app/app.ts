import { Component } from '@angular/core';
import { RandomComponent } from './random/random';
import { ListComponent } from './list/list';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomComponent, ListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  message = '';
}
