import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocksreenComponent } from './locksreen.component';

describe('LocksreenComponent', () => {
  let component: LocksreenComponent;
  let fixture: ComponentFixture<LocksreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocksreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocksreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
