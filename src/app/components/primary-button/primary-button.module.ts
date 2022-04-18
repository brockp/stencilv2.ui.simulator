import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { PrimaryButtonComponent } from '@app/components/primary-button/container/primary-button.component';
import { PrimaryButtonCodeFormComponent } from '@app/components/primary-button/edit/primary-button-code-form/primary-button-code-form.component';
import { PrimaryButtonFormComponent } from '@app/components/primary-button/edit/button-form/primary-button-form.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    PrimaryButtonCodeFormComponent,
    PrimaryButtonFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [PrimaryButtonComponent],
})
export class PrimaryButtonModule {}
