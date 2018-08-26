import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../model/note.model';
import { Observable } from 'rxjs';
import { Email } from '../model/email.model';
import { AuthService } from './auth.service';

@Injectable()
export class NoteHttpService {

  readonly URL_DB = 'http://localhost:8080/api';


  constructor(private http: HttpClient, private auth: AuthService) { }

  public saveNoteInDb(note: Note) {
    return this.http.post<Note>(this.URL_DB + '/note', note, {headers: this.auth.getHeaders()});
  }

  public getAllNotesFromDb() {
    return this.http.get<Array<Note>>(this.URL_DB + '/getAll', {headers: this.auth.getHeaders()});
  }

  public deleteNote(note: Note) {
    return this.http.delete(this.URL_DB + '/deletenote/' + note.id, {headers: this.auth.getHeaders()});
  }

  getNoteByIdFromDb(id: number) {
    return this.http.get<Note>(this.URL_DB + '/note/' + id, {headers: this.auth.getHeaders()});
  }

  sendEmail(email: Email) {
    return this.http.post<Email>('http://localhost:8080/email' + '/send',  email, {headers: this.auth.getHeaders()});
  }

  // sendReminder(email: Email, reminder: string) {
  //   return this.http.post<Email>('http://localhost:8080/email' + '/reminder/' + reminder, email);
  // }

}
