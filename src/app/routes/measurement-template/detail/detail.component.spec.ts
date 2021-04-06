import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasurementTemplateDetailComponent } from './detail.component';

describe('MeasurementTemplateDetailComponent', () => {
  let component: MeasurementTemplateDetailComponent;
  let fixture: ComponentFixture<MeasurementTemplateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementTemplateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
