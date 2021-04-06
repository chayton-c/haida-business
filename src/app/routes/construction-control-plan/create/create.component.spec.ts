import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionControlPlanCreateComponent } from './create.component';

describe('ConstructionControlPlanCreateComponent', () => {
  let component: ConstructionControlPlanCreateComponent;
  let fixture: ComponentFixture<ConstructionControlPlanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionControlPlanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionControlPlanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
