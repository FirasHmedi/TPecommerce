import { TestBed } from '@angular/core/testing';

import { FiltrageService } from './filtrage.service';

describe('FiltrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltrageService = TestBed.get(FiltrageService);
    expect(service).toBeTruthy();
  });
});
