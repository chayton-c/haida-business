import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcListComponent } from './list.component';

describe('OpcListComponent', () => {
  let component: OpcListComponent;
  let fixture: ComponentFixture<OpcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
