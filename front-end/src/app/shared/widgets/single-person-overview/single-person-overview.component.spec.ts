import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonOverviewComponent } from './single-person-overview.component';

describe('SinglePersonOverviewComponent', () => {
  let component: SinglePersonOverviewComponent;
  let fixture: ComponentFixture<SinglePersonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePersonOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePersonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
