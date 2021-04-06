import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipmentConstructionDailyPlanListComponent } from './construction-daily-plan-list.component';

describe('EquipmentConstructionDailyPlanListComponent', () => {
  let component: EquipmentConstructionDailyPlanListComponent;
  let fixture: ComponentFixture<EquipmentConstructionDailyPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentConstructionDailyPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentConstructionDailyPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
