import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragulaModule } from 'ng2-dragula';
import { EditableModule } from '@ngneat/edit-in-place';
import { EditButtonComponent } from './shared/edit-button/edit-button.component';
import { SaveButtonComponent } from './shared/save-button/save-button.component';
import { CancelButtonComponent } from './shared/cancel-button/cancel-button.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { SignupGraphicComponent } from './components/signup-graphic/signup-graphic.component';
import { SignupListItemOneComponent } from './components/signup-list-item-one/signup-list-item-one.component';
import { SignupListItemTwoComponent } from './components/signup-list-item-two/signup-list-item-two.component';

@NgModule({
  declarations: [AppComponent, EditButtonComponent, SaveButtonComponent, CancelButtonComponent, MobileHeaderComponent, SignupGraphicComponent, SignupListItemOneComponent, SignupListItemTwoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    EditableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
