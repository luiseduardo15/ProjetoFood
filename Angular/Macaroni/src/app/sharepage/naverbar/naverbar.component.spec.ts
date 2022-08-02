import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaverbarComponent } from './naverbar.component';

describe('NaverbarComponent', () => {
  let component: NaverbarComponent;
  let fixture: ComponentFixture<NaverbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaverbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaverbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
