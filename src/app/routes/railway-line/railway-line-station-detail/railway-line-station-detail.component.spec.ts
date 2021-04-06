import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RailwayLineRailwayLineStationDetailComponent } from './railway-line-station-detail.component';

describe('RailwayLineRailwayLineStationDetailComponent', () => {
  let component: RailwayLineRailwayLineStationDetailComponent;
  let fixture: ComponentFixture<RailwayLineRailwayLineStationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwayLineRailwayLineStationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayLineRailwayLineStationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
