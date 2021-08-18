import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGraphsComponent } from './user-graphs.component';

describe('UserGraphsComponent', () => {
  let component: UserGraphsComponent;
  let fixture: ComponentFixture<UserGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
