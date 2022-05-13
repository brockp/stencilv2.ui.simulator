import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { PrimaryButtonComponent } from '@app/components/primary-button/container/primary-button.component';
import { PrimaryButtonSelectorComponent } from './primary-button-selector/primary-button-selector.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [PrimaryButtonComponent, PrimaryButtonSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    DragulaModule,
  ],
  exports: [PrimaryButtonComponent, PrimaryButtonSelectorComponent],
})
export class PrimaryButtonModule {}
