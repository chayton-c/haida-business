import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CenterScreenSetPositionComponent } from './set-position.component';

describe('CenterScreenSetPositionComponent', () => {
  let component: CenterScreenSetPositionComponent;
  let fixture: ComponentFixture<CenterScreenSetPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterScreenSetPositionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterScreenSetPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
