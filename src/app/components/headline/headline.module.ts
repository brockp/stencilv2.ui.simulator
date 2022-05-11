import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortablejsModule } from 'ngx-sortablejs';
import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { HeadlineComponent } from '@app/components/headline/container/headline.component';
import { HeadlineSelectorComponent } from './headline-selector/headline-selector.component';

import { SignUpGraphicModule } from '../sign-up-graphic/sign-up-graphic.module';

import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [HeadlineComponent, HeadlineSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    SignUpGraphicModule,
    DragulaModule,
    SortablejsModule,
  ],
  exports: [HeadlineComponent, HeadlineSelectorComponent],
})
export class HeadlineModule {}
