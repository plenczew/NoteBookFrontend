import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { Note } from '../../model/note.model';
import { Email } from '../../model/email.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  title: string;
  content: string;
  reminder: Date;
  hour: number;
  minute: number;

  hours: Array<number>;
  minutes: Array<number>;

  showHideSetReminder: boolean;
  reminderButton: string;

  constructor(private noteService: NoteService) {
    this.hours = Array(24).fill(0).map((x, i) => i);
    this.minutes = Array(60).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.showHideSetReminder = false;
    this.reminderButton = 'Set Reminder';
  }

  hourValidation() {
  }

  add(): void {
    if (this.showHideSetReminder) {
      this.reminder.setHours(this.hour, this.minute);
      const note: Note = ({
        title: this.title, content: this.content, noteDates: {
          creationDate: new Date().toLocaleString(),
          remindDate: this.reminder.toLocaleString()
        }, done: false
      });
      this.noteService.saveNote(note).subscribe(
        data => {
          alert('Note added successfully. ');
        });
      this.clearAddForm();
    } else {
      const note: Note = ({
        title: this.title, content: this.content, noteDates: {
          creationDate: new Date().toLocaleString(),
        }, done: false
      });
      this.noteService.saveNote(note).subscribe(
        data => {
          alert('Note added successfully. ');
        });
        this.title = '';
        this.content = '';
    }
  }

  // sendReminder(): void {
  //   const email: Email = ({to: 'pawel.lencz@gmail.com', subject: this.title, content: this.content});
  //   this.noteService.sendReminder(email, this.reminder.toLocaleString()).subscribe();
  // }

  showHideSetReminderFields() {
    this.showHideSetReminder = !this.showHideSetReminder;
    if ( this.showHideSetReminder) {
      this.reminderButton = 'Disable reminder';
    } else {
      this.reminderButton = 'Set reminder';
    }
  }

  clearAddForm() {
    this.title = '';
    this.content = '';
    this.hour = undefined;
    this.minute = undefined;
    this.reminder = undefined;
  }

}
