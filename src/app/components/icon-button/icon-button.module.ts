import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { IconButtonComponent } from '@app/components/icon-button/container/icon-button.component';
import { IconButtonSelectorComponent } from './icon-button-selector/icon-button-selector.component';

@NgModule({
  declarations: [IconButtonComponent, IconButtonSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [IconButtonComponent, IconButtonSelectorComponent],
})
export class IconButtonModule {}
