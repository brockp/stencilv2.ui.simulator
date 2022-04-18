import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { LinkComponent } from '@app/components/link/link.component';
import { LinkFormComponent } from '@app/components/link/edit/link-form/link-form.component';
import { LinkCodeFormComponent } from '@app/components/link/edit/link-code-form/link-code-form.component';

@NgModule({
  declarations: [LinkComponent, LinkFormComponent, LinkCodeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [LinkComponent],
})
export class LinkModule {}
