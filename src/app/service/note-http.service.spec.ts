import { TestBed, inject } from '@angular/core/testing';

import { NoteHttpService } from './note-http.service';

describe('NoteHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteHttpService]
    });
  });

  it('should be created', inject([NoteHttpService], (service: NoteHttpService) => {
    expect(service).toBeTruthy();
  }));
});
