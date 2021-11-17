import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistantCachingComponent } from './persistant-caching.component';

describe('PersistantCachingComponent', () => {
  let component: PersistantCachingComponent;
  let fixture: ComponentFixture<PersistantCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersistantCachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistantCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
