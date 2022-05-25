import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { DescriptionComponent } from '@app/components/description/container/description.component';
import { DescriptionSelectorComponent } from './description-selector/description-selector.component';

@NgModule({
  declarations: [DescriptionComponent, DescriptionSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [DescriptionComponent, DescriptionSelectorComponent],
})
export class DescriptionModule {}
