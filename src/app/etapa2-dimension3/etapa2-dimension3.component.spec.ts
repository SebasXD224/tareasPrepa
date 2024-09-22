import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa2Dimension3Component } from './etapa2-dimension3.component';

describe('Etapa2Dimension3Component', () => {
  let component: Etapa2Dimension3Component;
  let fixture: ComponentFixture<Etapa2Dimension3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Etapa2Dimension3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapa2Dimension3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
