import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInTableComponent } from './family-in-table.component';

describe('FamilyInTableComponent', () => {
  let component: FamilyInTableComponent;
  let fixture: ComponentFixture<FamilyInTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyInTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
