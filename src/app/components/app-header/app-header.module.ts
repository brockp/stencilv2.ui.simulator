import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { AppHeaderComponent } from '@app/components/app-header/container/app-header.component';
import { HeaderFormComponent } from '@app/components/app-header/edit/header-form/header-form.component';
import { HeaderCodeFormComponent } from '@app/components/app-header/edit/header-code-form/header-code-form.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    HeaderFormComponent,
    HeaderCodeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [AppHeaderComponent],
})
export class AppHeaderModule {}
