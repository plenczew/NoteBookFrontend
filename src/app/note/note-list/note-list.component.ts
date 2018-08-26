import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { MatTableDataSource,
  MatTable, MatPaginator, MatSort, MatDialog, MatDialogRef, MatDialogConfig, MatIconRegistry } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Note } from '../../model/note.model';
import { NoteHttpService } from '../../service/note-http.service';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { SendEmailComponent } from '../send-email/send-email.component';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  allNotes: Array<Note>;
  dataSource: MatTableDataSource<Note>;
  // @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[] = ['id', 'title', 'content', 'created', 'reminder', 'actions'];

  sendEmailDialogRef: MatDialogRef<SendEmailComponent>;
  detailsDialogRef: MatDialogRef<NoteDetailsComponent>;

  constructor(private noteService: NoteService, private router: Router, private dialog: MatDialog,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('done', sanitizer.bypassSecurityTrustResourceUrl('assets/img/done.svg'));
      iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit.svg'));
      iconRegistry.addSvgIcon('remove', sanitizer.bypassSecurityTrustResourceUrl('assets/img/remove.svg'));
      iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/img/email.svg'));
      iconRegistry.addSvgIcon('reminder', sanitizer.bypassSecurityTrustResourceUrl('assets/img/reminder.svg'));

  }

  ngOnInit() {
    this.noteService.getAllNotesFromDb().subscribe(data => {
      this.allNotes = data.slice().filter(ele => ele.done === false);
      this.allNotes.sort((n1: Note, n2: Note) => n1.id - n2.id);
      this.dataSource = new MatTableDataSource(this.allNotes);
      // this.dataSource.sort = this.sort;
    });
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note).subscribe(
      data => {
        this.allNotes = this.allNotes.filter(n => n !== note);
        this.dataSource = new MatTableDataSource<Note>(this.allNotes);
      });
  }

  editNote(note: Note): void {
    this.router.navigate(['editNote', note.id]);
  }

  setAsDone(note: Note): void {
    this.allNotes = this.allNotes.filter(n => n !== note);
    this.dataSource = new MatTableDataSource<Note>(this.allNotes);
    note.reminderSend = true;
    note.done = true;
    note.noteDates.endDate = new Date().toLocaleString();
    this.noteService.saveNote(note).subscribe();
  }

  openSendEmailDialog(note: Note) {
    this.sendEmailDialogRef = this.dialog.open(SendEmailComponent);
    this.sendEmailDialogRef.componentInstance.subject = note.title;
    this.sendEmailDialogRef.componentInstance.emailContent = 'Title: ' + note.title + '\n' +
    'Task: ' + note.content;
  }

  openDetailsDialog(note: Note) {
    this.detailsDialogRef = this.dialog.open(NoteDetailsComponent);
    this.detailsDialogRef.componentInstance.note = note;
  }

  reminderChecker(note: Note): boolean {
    if (typeof note.noteDates.remindDate === 'string') {
      return true;
    } else {
      return false;
    }
  }
}
