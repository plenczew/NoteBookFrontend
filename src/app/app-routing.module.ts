import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { DoneListComponent } from './note/done-list/done-list.component';

const routes: Routes = [{path: 'noteList', component: NoteListComponent},
{path: 'doneList', component: DoneListComponent},
{path: 'addNote', component: AddNoteComponent},
{path: 'editNote/:id', component: EditNoteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
