import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa este módulo

import { EntidadService } from './entidadapi.service';

describe('EntidadapiService', () => {
  let service: EntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  
    });
    service = TestBed.inject(EntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
