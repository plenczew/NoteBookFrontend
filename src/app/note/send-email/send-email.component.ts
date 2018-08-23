import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Note } from '../../model/note.model';
import { NoteHttpService } from '../../service/note-http.service';
import { NoteService } from '../../service/note.service';
import { Email } from '../../model/email.model';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  to: string;
  subject: string;
  emailContent: string;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
  }

  sendEmail() {
    const email: Email = ({to: this.to, subject: this.subject, content: this.emailContent});
    this.noteService.sendEmail(email).subscribe();
  }

}
