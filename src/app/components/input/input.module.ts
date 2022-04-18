import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { InputComponent } from '@app/components/input/input.component';
import { InputFormComponent } from '@app/components/input/edit/input-form/input-form.component';
import { InputCodeFormComponent } from '@app/components/input/edit/input-code-form/input-code-form.component';

@NgModule({
  declarations: [InputComponent, InputFormComponent, InputCodeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [InputComponent],
})
export class InputModule {}
