import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookSummaryComponent } from './flight-book-summary.component';

describe('FlightBookSummaryComponent', () => {
  let component: FlightBookSummaryComponent;
  let fixture: ComponentFixture<FlightBookSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightBookSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
