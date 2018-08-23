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

  id: number;
  title: string;
  content: string;
  noteDates: NoteDates;
  reminderSend: boolean;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.noteService.getNoteFromDb(+this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content;
        this.noteDates = data.noteDates;
        this.reminderSend = data.reminderSend;
      });
  }

  updateNote() {
    const note: Note = ({
      id: this.id, title: this.title, content: this.content, noteDates: {id: this.noteDates.id,
        creationDate: this.noteDates.creationDate,
        updateDate: new Date().toLocaleString(), endDate: this.noteDates.endDate, remindDate: this.noteDates.remindDate
      }, done: false, reminderSend: this.reminderSend
    });
    this.noteService.saveNote(note).subscribe();
    this.router.navigate(['noteList']);
  }

}
