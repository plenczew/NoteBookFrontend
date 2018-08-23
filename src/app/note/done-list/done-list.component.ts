import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  doneNotes: Array<Note>;
  dataSource: MatTableDataSource<Note>;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[] = ['id', 'title', 'content', 'created'];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getAllNotesFromDb().subscribe(data => {
      this.doneNotes = data.slice().filter(ele => ele.done === true);
      this.doneNotes.sort((n1: Note, n2: Note) => n1.id - n2.id);
      this.dataSource = new MatTableDataSource(this.doneNotes);
      this.dataSource.sort = this.sort;
    });
  }

}
