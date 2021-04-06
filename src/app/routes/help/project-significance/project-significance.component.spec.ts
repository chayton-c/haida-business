import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpProjectSignificanceComponent } from './project-significance.component';

describe('HelpProjectSignificanceComponent', () => {
  let component: HelpProjectSignificanceComponent;
  let fixture: ComponentFixture<HelpProjectSignificanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpProjectSignificanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpProjectSignificanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
