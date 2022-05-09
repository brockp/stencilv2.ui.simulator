import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { SignUpGraphicComponent } from '@app/components/sign-up-graphic/container/sign-up-graphic.component';
import { SignUpGraphicFormComponent } from '@app/components/sign-up-graphic/edit/sign-up-graphic-form/sign-up-graphic-form.component';
import { SignUpGraphicCodeFormComponent } from '@app/components/sign-up-graphic/edit/sign-up-graphic-code-form/sign-up-graphic-code-form.component';
import { GraphicSelectorComponent } from './graphic-selector/graphic-selector.component';

@NgModule({
  declarations: [
    SignUpGraphicComponent,
    SignUpGraphicFormComponent,
    SignUpGraphicCodeFormComponent,
    GraphicSelectorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [SignUpGraphicComponent, GraphicSelectorComponent],
})
export class SignUpGraphicModule {}
