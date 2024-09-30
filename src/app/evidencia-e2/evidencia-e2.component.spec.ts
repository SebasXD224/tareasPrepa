import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaE2Component } from './evidencia-e2.component';

describe('EvidenciaE2Component', () => {
  let component: EvidenciaE2Component;
  let fixture: ComponentFixture<EvidenciaE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvidenciaE2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenciaE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
