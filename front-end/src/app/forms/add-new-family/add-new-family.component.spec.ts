import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFamilyComponent } from './add-new-family.component';

describe('AddNewFamilyComponent', () => {
  let component: AddNewFamilyComponent;
  let fixture: ComponentFixture<AddNewFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
