import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleOrganizationDetailComponent } from './detail.component';

describe('RoleOrganizationDetailComponent', () => {
  let component: RoleOrganizationDetailComponent;
  let fixture: ComponentFixture<RoleOrganizationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleOrganizationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleOrganizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
