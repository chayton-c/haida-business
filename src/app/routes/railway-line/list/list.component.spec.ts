import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RailwayLineListComponent } from './list.component';

describe('RailwayLineListComponent', () => {
  let component: RailwayLineListComponent;
  let fixture: ComponentFixture<RailwayLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RailwayLineListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
