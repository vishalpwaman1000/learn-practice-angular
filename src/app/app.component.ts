import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isShowList = true;
  topics = [
    { topic: 'Directive', route: 'directive' },
    { topic: 'Form', route: '' },
    { topic: 'Pipe', route: '' },
    { topic: 'Service', route: '' },
    { topic: 'Component', route: '' }];

  constructor(private router: Router) { }

  redirectToTopic(data: any) {
    this.isShowList = false;
    this.router.navigate(["/" + [data.route]]);
  }
}
