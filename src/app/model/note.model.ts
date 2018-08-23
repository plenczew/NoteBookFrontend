import { NoteDates } from './note-dates.model';

export interface Note {

  id?: number;
  title: string;
  content: string;
  noteDates: NoteDates;
  done: boolean;
  reminderSend?: boolean;
}
