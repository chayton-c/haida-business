import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelevancePlanRelevanceDetailComponent } from './relevance-detail.component';

describe('RelevancePlanRelevanceDetailComponent', () => {
  let component: RelevancePlanRelevanceDetailComponent;
  let fixture: ComponentFixture<RelevancePlanRelevanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevancePlanRelevanceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevancePlanRelevanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
