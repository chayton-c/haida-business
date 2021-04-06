import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcTypeListComponent } from './list.component';

describe('OpcTypeListComponent', () => {
  let component: OpcTypeListComponent;
  let fixture: ComponentFixture<OpcTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
