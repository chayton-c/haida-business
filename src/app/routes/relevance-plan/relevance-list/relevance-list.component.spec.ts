import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelevancePlanRelevanceListComponent } from './relevance-list.component';

describe('RelevancePlanRelevanceListComponent', () => {
  let component: RelevancePlanRelevanceListComponent;
  let fixture: ComponentFixture<RelevancePlanRelevanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelevancePlanRelevanceListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevancePlanRelevanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
