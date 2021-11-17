import { changeList } from './models/changes.model';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Angular13Project';
	lists: { id: string; name: string; }[] = changeList;
}
