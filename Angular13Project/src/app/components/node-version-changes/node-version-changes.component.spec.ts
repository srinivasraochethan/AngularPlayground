import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeVersionChangesComponent } from './node-version-changes.component';

describe('NodeVersionChangesComponent', () => {
  let component: NodeVersionChangesComponent;
  let fixture: ComponentFixture<NodeVersionChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeVersionChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeVersionChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
