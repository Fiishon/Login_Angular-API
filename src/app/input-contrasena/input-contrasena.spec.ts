import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContrasena } from './input-contrasena';

describe('InputContrasena', () => {
  let component: InputContrasena;
  let fixture: ComponentFixture<InputContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
