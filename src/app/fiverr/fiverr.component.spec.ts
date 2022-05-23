import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiverrComponent } from './fiverr.component';

describe('FiverrComponent', () => {
  let component: FiverrComponent;
  let fixture: ComponentFixture<FiverrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiverrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiverrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
