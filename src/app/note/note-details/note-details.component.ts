import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  updateDateFlag: boolean;
  reminderDateFlag: boolean;
  reminderSendFlag: boolean;
  doneDateFlag: boolean;
  reminderSendText: string;

  constructor() { }

  ngOnInit() {
    if (typeof this.note.noteDates.remindDate === 'string') {
      this.reminderDateFlag = true;
    } else {
      this.reminderDateFlag = false;
    }

    if (typeof this.note.noteDates.updateDate === 'string') {
      this.updateDateFlag = true;
    } else {
      this.updateDateFlag = false;
    }

    if (typeof this.note.noteDates.endDate === 'string') {
      this.doneDateFlag = true;
    } else {
      this.doneDateFlag = false;
    }
  }

  showReminderDate() {
    if (typeof this.note.reminderSend === 'string') {
      this.reminderDateFlag = true;
    } else {
      this.reminderDateFlag = false;
    }
    return this.reminderDateFlag;
  }

}
