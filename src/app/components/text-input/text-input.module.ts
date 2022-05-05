import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { TextInputComponent } from '@app/components/text-input/container/text-input.component';
import { TextInputFormComponent } from '@app/components/text-input/edit/text-input-form/text-input-form.component';
import { TextInputCodeFormComponent } from '@app/components/text-input/edit/text-input-code-form/text-input-code-form.component';
import { TextInputSelectorComponent } from './text-input-selector/text-input-selector.component';

@NgModule({
  declarations: [
    TextInputComponent,
    TextInputFormComponent,
    TextInputCodeFormComponent,
    TextInputSelectorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [TextInputComponent, TextInputSelectorComponent],
})
export class TextInputModule {}
