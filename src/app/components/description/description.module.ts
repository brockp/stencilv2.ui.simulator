import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { DescriptionComponent } from '@app/components/description/container/description.component';
import { DescriptionFormComponent } from '@app/components/description/edit/description-form/description-form.component';
import { DescriptionCodeFormComponent } from '@app/components/description/edit/description-code-form/description-code-form.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    DescriptionFormComponent,
    DescriptionCodeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  exports: [DescriptionComponent],
})
export class DescriptionModule {}
