import { BaseComponent } from './../base/base.component';
import { Component } from '@angular/core';

interface Hero {
  type: 'alien' | 'human';
  [key: string]: string;
}

@Component({
  selector: 'app-check-implicit-override',
  templateUrl: './check-implicit-override.component.html',
  styleUrls: ['./check-implicit-override.component.scss']
})
export class CheckImplicitOverrideComponent extends BaseComponent {
  static count = 0;

  get count() {
    return CheckImplicitOverrideComponent.count;
  }

  static {
    try {
      const retireveSomethingToIncrementCount = 100; // assume some method was called and count was retrieved
      CheckImplicitOverrideComponent.count += retireveSomethingToIncrementCount;
    }
    catch {}
  }

  constructor() {
    super();
  }

  override async initialize() {
    const batman: Hero = { type: 'human' };
    batman['alterEgo'] = 'Bruce Wayne';
  }

}
