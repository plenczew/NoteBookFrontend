import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../model/note.model';
import { Observable } from 'rxjs';

@Injectable()
export class NoteHttpService {

  readonly URL_DB = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  public saveNoteInDb(note: Note) {
    return this.http.post<Note>(this.URL_DB + '/note', note);
  }

  public getAllNotesFromDb() {
    return this.http.get<Array<Note>>(this.URL_DB + '/getAll');
  }

  public deleteNote(note: Note) {
    return this.http.delete(this.URL_DB + '/deletenote/' + note.id);
  }

  getNoteByIdFromDb(id: number) {
    return this.http.get<Note>(this.URL_DB + '/note/' + id);
  }

}