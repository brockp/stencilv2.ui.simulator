import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { SignUpGraphicComponent } from '@app/components/sign-up-graphic/container/sign-up-graphic.component';
import { GraphicSelectorComponent } from './graphic-selector/graphic-selector.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [SignUpGraphicComponent, GraphicSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    DragulaModule,
  ],
  exports: [SignUpGraphicComponent, GraphicSelectorComponent],
})
export class SignUpGraphicModule {}
