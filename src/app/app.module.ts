import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import {FormsModule} from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    ArticlesComponent,
    ConvertisseurComponent,
    ToEuroConvertComponent,
    ActorsComponent,
    ActorComponent,
    TemplateDrivenFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
