import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceTypeDetailComponent } from './detail.component';

describe('DeviceTypeDetailComponent', () => {
  let component: DeviceTypeDetailComponent;
  let fixture: ComponentFixture<DeviceTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceTypeDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
