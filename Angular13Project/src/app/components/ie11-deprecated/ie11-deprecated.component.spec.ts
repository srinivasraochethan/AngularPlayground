import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IE11DeprecatedComponent } from './ie11-deprecated.component';

describe('IE11DeprecatedComponent', () => {
  let component: IE11DeprecatedComponent;
  let fixture: ComponentFixture<IE11DeprecatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IE11DeprecatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IE11DeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
