import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionFormalPlanSignInComponent } from './sign-in.component';

describe('ConstructionFormalPlanSignInComponent', () => {
  let component: ConstructionFormalPlanSignInComponent;
  let fixture: ComponentFixture<ConstructionFormalPlanSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionFormalPlanSignInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionFormalPlanSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
