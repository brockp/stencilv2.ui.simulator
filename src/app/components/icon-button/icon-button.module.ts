import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { DragulaModule } from 'ng2-dragula';
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
    DragulaModule,
  ],
  exports: [IconButtonComponent, IconButtonSelectorComponent],
})
export class IconButtonModule {}
