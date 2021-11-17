import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImprovementsComponent } from './test-improvements.component';

describe('TestImprovementsComponent', () => {
  let component: TestImprovementsComponent;
  let fixture: ComponentFixture<TestImprovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestImprovementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
