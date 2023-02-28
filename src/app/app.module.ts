import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskmanagerComponent } from './components/taskmanager/taskmanager.component';
import { TaskComponent } from './components/task/task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreationButtonComponent } from './components/creation-button/creation-button.component';
import { CreationFormComponent } from './components/creation-form/creation-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskmanagerComponent,
    TaskComponent,
    CreationButtonComponent,
    CreationFormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
