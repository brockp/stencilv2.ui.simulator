import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { DescriptionComponent } from '@app/components/description/container/description.component';
import { DescriptionFormComponent } from '@app/components/description/edit/description-form/description-form.component';
import { DescriptionCodeFormComponent } from '@app/components/description/edit/description-code-form/description-code-form.component';
import { DescriptionSelectorComponent } from './description-selector/description-selector.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    DescriptionFormComponent,
    DescriptionCodeFormComponent,
    DescriptionSelectorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  exports: [DescriptionComponent, DescriptionSelectorComponent],
})
export class DescriptionModule {}
