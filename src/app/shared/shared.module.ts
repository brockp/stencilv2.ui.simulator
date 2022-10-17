import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared/material.module';

import { SaveButtonComponent } from '@app/shared/save-button/save-button.component';
import { CancelButtonComponent } from '@app/shared/cancel-button/cancel-button.component';
import { EditorSidebarComponent } from '@app/editor/editor-sidebar/editor-sidebar.component';
import { PaddingControlComponent } from './padding-control/padding-control.component';

@NgModule({
  declarations: [
    SaveButtonComponent,
    CancelButtonComponent,
    EditorSidebarComponent,
    PaddingControlComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    SaveButtonComponent,
    CancelButtonComponent,
    EditorSidebarComponent,
    PaddingControlComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
