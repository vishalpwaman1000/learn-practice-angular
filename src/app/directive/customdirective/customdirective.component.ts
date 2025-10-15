import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CustomColorDirectiveDirective } from '../custom-color-directive.directive';

@Component({
  selector: 'app-customdirective',
  standalone: true,
  imports: [HighlightDirective, CustomColorDirectiveDirective],
  templateUrl: './customdirective.component.html',
  styleUrl: './customdirective.component.css'
})
export class CustomdirectiveComponent {

}
