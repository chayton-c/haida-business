import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelevancePlanUploadListComponent } from './upload-list.component';

describe('RelevancePlanUploadListComponent', () => {
  let component: RelevancePlanUploadListComponent;
  let fixture: ComponentFixture<RelevancePlanUploadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelevancePlanUploadListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevancePlanUploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
