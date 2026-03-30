import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithAPI } from './login-with-api';

describe('LoginWithAPI', () => {
  let component: LoginWithAPI;
  let fixture: ComponentFixture<LoginWithAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithAPI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
