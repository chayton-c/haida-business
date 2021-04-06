import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcOpcStationComponent } from './opc-station.component';

describe('OpcOpcStationComponent', () => {
  let component: OpcOpcStationComponent;
  let fixture: ComponentFixture<OpcOpcStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcOpcStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcOpcStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
