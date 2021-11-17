import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckImplicitOverrideComponent } from './check-implicit-override.component';

describe('CheckImplicitOverrideComponent', () => {
  let component: CheckImplicitOverrideComponent;
  let fixture: ComponentFixture<CheckImplicitOverrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckImplicitOverrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckImplicitOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
