import { TestBed } from '@angular/core/testing';

import { NgeFacturaperuService } from './nge-facturaperu.service';

describe('NgeFacturaperuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgeFacturaperuService = TestBed.get(NgeFacturaperuService);
    expect(service).toBeTruthy();
  });
});
