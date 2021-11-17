import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  onNavigate(): void {
    window.open('https://www.npmjs.com/package/@angular/cli');
  }

}
