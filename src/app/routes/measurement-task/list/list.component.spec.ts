import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasurementTaskListComponent } from './list.component';

describe('MeasurementTaskListComponent', () => {
  let component: MeasurementTaskListComponent;
  let fixture: ComponentFixture<MeasurementTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
