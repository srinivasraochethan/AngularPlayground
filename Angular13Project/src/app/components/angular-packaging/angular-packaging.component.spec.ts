import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPackagingComponent } from './angular-packaging.component';

describe('AngularPackagingComponent', () => {
  let component: AngularPackagingComponent;
  let fixture: ComponentFixture<AngularPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPackagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
