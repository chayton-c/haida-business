import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionFormalPlanListComponent } from './list.component';

describe('ConstructionFormalPlanListComponent', () => {
  let component: ConstructionFormalPlanListComponent;
  let fixture: ComponentFixture<ConstructionFormalPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionFormalPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionFormalPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
