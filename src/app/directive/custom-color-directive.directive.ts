import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomColorDirective]',
  standalone: true
})
export class CustomColorDirectiveDirective implements OnInit {

  @Input('appCustomColorDirective') appCustomColor = 'lightblue';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  ngOnInit() {
    this.backgroundColor = this.appCustomColor;
  }

}
