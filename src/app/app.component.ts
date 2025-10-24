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
    { topic: 'Template Form', route: 'template-form' },
  ];
  // { topic: 'Pipe', route: '' },
  // { topic: 'Service', route: '' },
  // { topic: 'Component', route: '' }
  // ];

  constructor(private router: Router) { }

  // ngOnInit() {
  //   const currentUrl = this.router.url.replace('/', '');
  //   debugger;
  //   const found = this.topics.some(t => currentUrl.includes(t.route));
  //   console.log("Found : ", found, " currentUrl : ", currentUrl);

  //   if (found) this.isShowList = false;
  //   else this.isShowList = true;

  // }

  redirectToTopic(data: any) {
    this.isShowList = false;
    this.router.navigate(["/" + [data.route]]);
  }

  redirectToBack() {
    this.isShowList = true;
    this.router.navigate(["/"]);
  }
}
