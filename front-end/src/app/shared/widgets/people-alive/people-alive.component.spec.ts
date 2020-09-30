import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAliveComponent } from './people-alive.component';

describe('PeopleAliveComponent', () => {
  let component: PeopleAliveComponent;
  let fixture: ComponentFixture<PeopleAliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
