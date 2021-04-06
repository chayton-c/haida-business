import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionControlPlanDetailComponent } from './detail.component';

describe('ConstructionControlPlanDetailComponent', () => {
  let component: ConstructionControlPlanDetailComponent;
  let fixture: ComponentFixture<ConstructionControlPlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionControlPlanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionControlPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
