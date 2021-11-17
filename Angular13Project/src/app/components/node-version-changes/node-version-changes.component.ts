import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-version-changes',
  templateUrl: './node-version-changes.component.html',
  styleUrls: ['./node-version-changes.component.scss']
})
export class NodeVersionChangesComponent {

  constructor() {}

  onNavigate(): void {
    window.open('https://nodejs.org/api/packages.html#subpath-exports');
  }

}
