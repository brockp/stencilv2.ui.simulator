import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { ParagraphComponent } from '@app/components/paragraph/paragraph.component';
import { ParagraphFormComponent } from '@app/components/paragraph/edit/paragraph-form/paragraph-form.component';
import { ParagraphCodeFormComponent } from '@app/components/paragraph/edit/paragraph-code-form/paragraph-code-form.component';

@NgModule({
  declarations: [
    ParagraphComponent,
    ParagraphFormComponent,
    ParagraphCodeFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [ParagraphComponent],
})
export class ParagraphModule {}
