import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { MatTableDataSource, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { SendEmailComponent } from '../send-email/send-email.component';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  doneNotes: Array<Note>;
  dataSource: MatTableDataSource<Note>;
  // @ViewChild(MatSort) sort: MatSort;

  detailsDialogRef: MatDialogRef<NoteDetailsComponent>;

  columnsToDisplay: string[] = ['id', 'title', 'content', 'created', 'done'];

  constructor(private noteService: NoteService, private dialog: MatDialog) { }

  ngOnInit() {
    this.noteService.getAllNotesFromDb().subscribe(data => {
      this.doneNotes = data.slice().filter(ele => ele.done === true);
      this.doneNotes.sort((n1: Note, n2: Note) => n1.id - n2.id);
      this.dataSource = new MatTableDataSource(this.doneNotes);
      // this.dataSource.sort = this.sort;
    });
  }

  openDetailsDialog(note: Note) {
    this.detailsDialogRef = this.dialog.open(NoteDetailsComponent);
    this.detailsDialogRef.componentInstance.note = note;
  }

}
