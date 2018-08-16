import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { MatTableDataSource, MatTable, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Note } from '../../model/note.model';
import { NoteHttpService } from '../../service/note-http.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  allNotes: Array<Note>;
  dataSource: MatTableDataSource<Note>;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[] = ['id', 'title', 'content', 'actions'];

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
    this.noteService.getAllNotesFromDb().subscribe(data => {
      this.allNotes = data;
      this.allNotes.sort((n1: Note, n2: Note) => n1.id - n2.id );
      this.dataSource = new MatTableDataSource<Note>(this.allNotes);
      this.dataSource.sort = this.sort;
    });
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note).subscribe(
      data => {
        this.allNotes = this.allNotes.filter(n => n !== note);
      });
  }

  editNote(note: Note): void {
    this.router.navigate(['editNote', note.id]);
  }


  // selectRow(row: Note) {
  //   this.noteService.setEditNote(row);
  //   this.router.navigate(['editNote']);
  // }
}
