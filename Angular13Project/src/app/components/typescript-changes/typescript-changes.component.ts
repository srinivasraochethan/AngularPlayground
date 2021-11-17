import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-changes',
  templateUrl: './typescript-changes.component.html',
  styleUrls: ['./typescript-changes.component.scss']
})
export class TypescriptChangesComponent {

  constructor() {}

  onNavigate(): void {
    window.open('https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html');
  }

}
