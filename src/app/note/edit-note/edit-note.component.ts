import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NoteDates } from '../../model/note-dates.model';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  showHideUpdateReminder: boolean;
  hour: number;
  minute: number;
  hours: Array<number>;
  minutes: Array<number>;
  reminder: Date;

  id: number;
  title: string;
  content: string;
  noteDates: NoteDates;
  reminderSend: boolean;

  reminderButton: string;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {
    this.hours = Array(24).fill(0).map((x, i) => i);
    this.minutes = Array(60).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.noteService.getNoteFromDb(+this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content;
        this.noteDates = data.noteDates;
        this.reminderSend = data.reminderSend;
        if (typeof this.noteDates.remindDate === 'string') {
          this.showHideUpdateReminder = true;
        } else {
          this.showHideUpdateReminder = false;
        }
        if ( this.showHideUpdateReminder) {
          this.reminderButton = 'Disable reminder';
        } else {
          this.reminderButton = 'Set reminder';
        }
      });

  }

  updateNote() {
    if (this.showHideUpdateReminder) {
    this.reminder.setHours(this.hour, this.minute);
    const note: Note = ({
      id: this.id, title: this.title, content: this.content, noteDates: {id: this.noteDates.id,
        creationDate: this.noteDates.creationDate,
        updateDate: new Date().toLocaleString(), remindDate: this.reminder.toLocaleString()
      }, done: false, reminderSend: this.reminderSend
    });
    this.noteService.saveNote(note).subscribe();
    } else {
      const note: Note = ({
        id: this.id, title: this.title, content: this.content, noteDates: {id: this.noteDates.id,
          creationDate: this.noteDates.creationDate,
          updateDate: new Date().toLocaleString(), remindDate: null
        }, done: false, reminderSend: this.reminderSend
      });
      this.noteService.saveNote(note).subscribe();
    }
    this.router.navigate(['noteList']);
  }

  showHideUpdateReminderFields() {
    this.showHideUpdateReminder = !this.showHideUpdateReminder;
    if ( this.showHideUpdateReminder) {
      this.reminderButton = 'Disable reminder';
    } else {
      this.reminderButton = 'Set reminder';
    }
  }

  goToNoteList() {
    this.router.navigate(['noteList']);
  }

}
