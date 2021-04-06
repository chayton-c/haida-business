import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcDetailComponent } from './detail.component';

describe('OpcDetailComponent', () => {
  let component: OpcDetailComponent;
  let fixture: ComponentFixture<OpcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
