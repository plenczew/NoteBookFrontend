import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note: Note = new Note();

  constructor(private noteService: NoteService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.noteService.getNoteFromDb(+this.route.snapshot.paramMap.get('id'))
    .subscribe(data => {
      this.note = data;
    });
  }

  updateNote() {
    console.log(this.note);
    this.noteService.saveNote(this.note).subscribe();
  }

}
