import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcUploadComponent } from './upload.component';

describe('OpcUploadComponent', () => {
  let component: OpcUploadComponent;
  let fixture: ComponentFixture<OpcUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
