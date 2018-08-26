import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { NoteService } from './service/note.service';
import { NoteHttpService } from './service/note-http.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import {MatInputModule,
  MatCheckboxModule,
   MatTableModule,
   MatButtonToggleModule,
   MatAutocompleteModule,
   MatSlideToggleModule,
   MatToolbarModule,
   MatSidenavModule,
   MatPaginator,
   MatPaginatorModule,
   MatSortModule,
   MatDialogModule,
   MatDatepickerModule,
   MatNativeDateModule, MatIconModule, MatCardModule, MatProgressSpinner, MatMenuModule, MatTabsModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { NoteListComponent } from './note/note-list/note-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { TextFormatPipe } from './utilities/text-format.pipe';
import { SendEmailComponent } from './note/send-email/send-email.component';
import { DoneListComponent } from './note/done-list/done-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ProfileComponent } from './account/profile/profile.component';
import { UrlPermission } from './urlPermission/url.permission';
import { LoggedComponent } from './logged/logged.component';
import { NoteDetailsComponent } from './note/note-details/note-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NoteListComponent,
    NavigationComponent,
    EditNoteComponent,
    TextFormatPipe,
    SendEmailComponent,
    DoneListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LoggedComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonToggleModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule

  ],
  entryComponents: [SendEmailComponent, NoteDetailsComponent],
  providers: [NoteService, NoteHttpService, UrlPermission, LoginComponent, NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
