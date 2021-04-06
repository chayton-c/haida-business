import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionControlPlanUploadComponent } from './upload.component';

describe('ConstructionControlPlanUploadComponent', () => {
  let component: ConstructionControlPlanUploadComponent;
  let fixture: ComponentFixture<ConstructionControlPlanUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionControlPlanUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionControlPlanUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
