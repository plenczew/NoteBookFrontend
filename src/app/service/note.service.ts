import { Injectable } from '@angular/core';
import { NoteHttpService } from './note-http.service';
import { Note } from '../model/note.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../model/email.model';

@Injectable()
export class NoteService {

  private noteList = new Array();
  // editNote: Note = new Note();

  // private editNoteObs = new BehaviorSubject<Note>(this.editNote);

  constructor(private noteHttpService: NoteHttpService) {
      this.getAllNotesFromDb();
   }

   public saveNote(note: Note) {
    return this.noteHttpService.saveNoteInDb(note);
  }

  public getAllNotesFromDb() {
    return this.noteHttpService.getAllNotesFromDb();
  }

  public deleteNote(note: Note) {
    return this.noteHttpService.deleteNote(note);
  }

  public getNoteFromDb(id: number) {
    return this.noteHttpService.getNoteByIdFromDb(id);
  }

  public sendEmail(email: Email) {
    return this.noteHttpService.sendEmail(email);
  }

  // public sendReminder(email: Email, reminder: string) {
  //   return this.noteHttpService.sendReminder(email, reminder);
  // }

  //  getNote(id: number | string) {
  //   return this.getNoteList().pipe(map(data => this.noteList.find(note => note.id === +id)));
  //  }

   public getNoteList(): Array<Note> {
    return this.noteList;
   }

  //  getEditNote(): Observable<Note> {
  //    return this.editNoteObs.asObservable();
  //  }

  //  setEditNote(note: Note) {
  //     this.editNote = note;
  //     this.editNoteObs.next(this.editNote);
  //  }

  // updateNote(note: Note) {
  //   this.saveNote(note);
  // }

  // getNoteByIdFromDb(note: Note) {
  //   console.log(this.noteList);
  //   this.noteHttpService.getNoteByIdFromDb(note).subscribe((data: Note) => {
  //     this.noteList.splice(note.id, -1, data);
  //   });
  //   console.log(this.noteList);
  // }

}
