import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directive/highlight.directive';
import { CustomColorDirectiveDirective } from './directive/custom-color-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective, CustomColorDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learn';
}
