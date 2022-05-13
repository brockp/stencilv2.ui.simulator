import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { DragulaModule } from 'ng2-dragula';

import { TextInputComponent } from '@app/components/text-input/container/text-input.component';
import { TextInputSelectorComponent } from './text-input-selector/text-input-selector.component';

@NgModule({
  declarations: [TextInputComponent, TextInputSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    DragulaModule,
  ],
  exports: [TextInputComponent, TextInputSelectorComponent],
})
export class TextInputModule {}
