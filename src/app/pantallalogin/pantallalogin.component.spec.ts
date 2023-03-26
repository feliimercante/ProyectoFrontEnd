import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaloginComponent } from './pantallalogin.component';

describe('PantallaloginComponent', () => {
  let component: PantallaloginComponent;
  let fixture: ComponentFixture<PantallaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
