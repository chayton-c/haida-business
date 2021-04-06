import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceSubTypeDetailComponent } from './detail.component';

describe('DeviceSubTypeDetailComponent', () => {
  let component: DeviceSubTypeDetailComponent;
  let fixture: ComponentFixture<DeviceSubTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceSubTypeDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSubTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
