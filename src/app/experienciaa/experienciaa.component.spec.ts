import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaaComponent } from './experienciaa.component';

describe('ExperienciaaComponent', () => {
  let component: ExperienciaaComponent;
  let fixture: ComponentFixture<ExperienciaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
