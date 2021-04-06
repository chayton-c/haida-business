import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpAboutUsComponent } from './about-us.component';

describe('HelpAboutUsComponent', () => {
  let component: HelpAboutUsComponent;
  let fixture: ComponentFixture<HelpAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpAboutUsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
