import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationPrerequisitesComponent } from './migration-prerequisites.component';

describe('MigrationPrerequisitesComponent', () => {
  let component: MigrationPrerequisitesComponent;
  let fixture: ComponentFixture<MigrationPrerequisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationPrerequisitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationPrerequisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
