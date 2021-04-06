import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CenterScreenScreenComponent } from './screen.component';

describe('CenterScreenScreenComponent', () => {
  let component: CenterScreenScreenComponent;
  let fixture: ComponentFixture<CenterScreenScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterScreenScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterScreenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
