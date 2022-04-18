import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { TextareaFormComponent } from '@app/components/textarea/edit/textarea-form/textarea-form.component';
import { TextAreaCodeFormComponent } from '@app/components/textarea/edit/text-area-code-form/text-area-code-form.component';

@NgModule({
  declarations: [
    TextareaComponent,
    TextareaFormComponent,
    TextAreaCodeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [TextareaComponent],
})
export class TextareaModule {}
