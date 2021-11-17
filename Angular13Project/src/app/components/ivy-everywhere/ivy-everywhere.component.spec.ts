import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyEverywhereComponent } from './ivy-everywhere.component';

describe('IvyEverywhereComponent', () => {
  let component: IvyEverywhereComponent;
  let fixture: ComponentFixture<IvyEverywhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvyEverywhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyEverywhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
