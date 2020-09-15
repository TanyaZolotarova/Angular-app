import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {RegisterComponent} from './components/register/register.component';
import {ToDoListComponent} from './components/to-do-list/to-do-list.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppState, reducers} from './store/reducers';
import {TodosEffects} from './store/effects/todo.effects';

const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('root reducer');







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToDoListComponent,
    EditProfileComponent
  ],
  imports: [
    EffectsModule,
    StoreModule,
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
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, {}),
    EffectsModule.forRoot([
      TodosEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),

    RouterModule.forRoot([
        {path: '', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'todo', component: ToDoListComponent},
        {path: 'profile', component: EditProfileComponent}
    ]),
  ],
  providers: [
    ApiService,
    {
      provide: REDUCER_TOKEN,
      useValue: reducers,
    },
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
