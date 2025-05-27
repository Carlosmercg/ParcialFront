import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarEntidadesComponent } from './insertar-entidades.component';

describe('InsertarEntidadesComponent', () => {
  let component: InsertarEntidadesComponent;
  let fixture: ComponentFixture<InsertarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
