import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptChangesComponent } from './typescript-changes.component';

describe('TypescriptChangesComponent', () => {
  let component: TypescriptChangesComponent;
  let fixture: ComponentFixture<TypescriptChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
