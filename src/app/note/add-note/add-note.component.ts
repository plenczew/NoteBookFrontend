import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { Note } from '../../model/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note: Note = new Note();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  add(): void {
    this.noteService.saveNote(this.note).subscribe(
      data => { alert('Note added successfully. ');
    });
  }

}
