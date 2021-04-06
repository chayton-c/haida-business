import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticAnalysisMainComponent } from './main.component';

describe('StatisticAnalysisMainComponent', () => {
  let component: StatisticAnalysisMainComponent;
  let fixture: ComponentFixture<StatisticAnalysisMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticAnalysisMainComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticAnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
