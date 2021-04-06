import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasurementTemplateLineListComponent } from './line-list.component';

describe('MeasurementTemplateLineListComponent', () => {
  let component: MeasurementTemplateLineListComponent;
  let fixture: ComponentFixture<MeasurementTemplateLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementTemplateLineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementTemplateLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
