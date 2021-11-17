import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSConfigChangesComponent } from './tsconfig-changes.component';

describe('TSConfigChangesComponent', () => {
  let component: TSConfigChangesComponent;
  let fixture: ComponentFixture<TSConfigChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSConfigChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSConfigChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
