import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { DoneListComponent } from './note/done-list/done-list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ProfileComponent } from './account/profile/profile.component';
import { UrlPermission } from './urlPermission/url.permission';
import {HttpClientModule} from '@angular/common/http';
import { LoggedComponent } from './logged/logged.component';

const routes: Routes = [{path: 'noteList', component: NoteListComponent, canActivate: [UrlPermission]},
{path: 'doneList', component: DoneListComponent, canActivate: [UrlPermission]},
{path: 'addNote', component: AddNoteComponent, canActivate: [UrlPermission]},
{path: 'editNote/:id', component: EditNoteComponent, canActivate: [UrlPermission]},
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'logged', component: LoggedComponent },
{path: 'profile', component: ProfileComponent , canActivate: [UrlPermission] },
{path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
