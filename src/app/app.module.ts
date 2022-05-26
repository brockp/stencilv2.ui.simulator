import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from './editor/editor.module';
import { MaterialModule } from './shared/material.module';
import { EditableModule } from '@ngneat/edit-in-place';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditorModule,
    MaterialModule,
    EditableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
