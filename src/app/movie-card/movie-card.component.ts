import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input()
  title !: string;

  @Input()
  original_language !: string;

  @Input()
  poster_path !: string;
}
