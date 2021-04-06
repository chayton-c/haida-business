import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionControlPlanPreviewComponent } from './preview.component';

describe('ConstructionControlPlanPreviewComponent', () => {
  let component: ConstructionControlPlanPreviewComponent;
  let fixture: ComponentFixture<ConstructionControlPlanPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionControlPlanPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionControlPlanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
