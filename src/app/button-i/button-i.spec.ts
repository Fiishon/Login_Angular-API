import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonI } from './button-i';

describe('ButtonI', () => {
  let component: ButtonI;
  let fixture: ComponentFixture<ButtonI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
