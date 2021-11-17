import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsChangesComponent } from './rxjs-changes.component';

describe('RxjsChangesComponent', () => {
  let component: RxjsChangesComponent;
  let fixture: ComponentFixture<RxjsChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
