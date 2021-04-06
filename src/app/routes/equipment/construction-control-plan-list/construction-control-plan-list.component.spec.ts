import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipmentConstructionControlPlanListComponent } from './construction-control-plan-list.component';

describe('EquipmentConstructionControlPlanListComponent', () => {
  let component: EquipmentConstructionControlPlanListComponent;
  let fixture: ComponentFixture<EquipmentConstructionControlPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentConstructionControlPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentConstructionControlPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
