import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEntregaComponent } from './plan-entrega.component';

describe('PlanEntregaComponent', () => {
  let component: PlanEntregaComponent;
  let fixture: ComponentFixture<PlanEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
