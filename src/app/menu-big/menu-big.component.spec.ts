import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBigComponent } from './menu-big.component';

describe('MenuBigComponent', () => {
  let component: MenuBigComponent;
  let fixture: ComponentFixture<MenuBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
