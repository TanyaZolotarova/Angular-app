import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginAtFormComponent } from './login-at-form/login-at-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginAtFormComponent,
    ToDoListComponent,
    EditProfileComponent
  ],
  imports: [
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
        {path: '', component: LoginFormComponent},
        {path: 'login', component: LoginAtFormComponent},
        {path: 'todo', component: ToDoListComponent},
      {path: 'profile', component: EditProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
