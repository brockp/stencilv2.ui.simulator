import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { HeadlineComponent } from '@app/components/headline/container/headline.component';
import { HeadlineFormComponent } from '@app/components/headline/edit/headline-form/headline-form.component';
import { HeadlineCodeFormComponent } from '@app/components/headline/edit/headline-code-form/headline-code-form.component';

@NgModule({
  declarations: [
    HeadlineComponent,
    HeadlineFormComponent,
    HeadlineCodeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [HeadlineComponent],
})
export class HeadlineModule {}
