import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEntidadesComponent } from './mostrar-entidades.component';

describe('MostrarEntidadesComponent', () => {
  let component: MostrarEntidadesComponent;
  let fixture: ComponentFixture<MostrarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
