import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Libraries

import { EditableModule } from '@ngneat/edit-in-place';

// Services
import { ViewportService } from '../services/viewport/viewport.service';

// Stencil Editable Components
import { EditorComponent } from './editor/editor.component';

// Component Modules
import { HeadlineModule } from '@app/components/headline/headline.module';
import { AppHeaderModule } from '@app/components/app-header/app-header.module';
import { CarouselModule } from '@app/components/carousel/carousel.module';
import { DescriptionModule } from '@app/components/description/description.module';
import { IconButtonModule } from '@app/components/icon-button/icon-button.module';
import { PrimaryButtonModule } from '@app/components/primary-button/primary-button.module';
import { SignUpGraphicModule } from '@app/components/sign-up-graphic/sign-up-graphic.module';
import { TextInputModule } from '@app/components/text-input/text-input.module';
import { SpacerModule } from '@app/components/spacer/spacer.module';

// Helper Components
import { SharedModule } from '@app/shared/shared.module';
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';

// testing
import { MaterialModule } from '@app/shared/material.module';
import { MaterialShellComponent } from './material-shell/material-shell.component';
import { DragulaModule } from 'ng2-dragula';
@NgModule({
  declarations: [EditorComponent, MaterialShellComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HeadlineModule,
    AppHeaderModule,
    CarouselModule,
    DescriptionModule,
    IconButtonModule,
    PrimaryButtonModule,
    SignUpGraphicModule,
    TextInputModule,
    SpacerModule,
    SharedModule,
    EditableModule,
    DragulaModule.forRoot(),
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: {
          theme: 'light-border',
        },
        popper: popperVariation,
      },
    }),
  ],
  exports: [EditorComponent],
  providers: [ViewportService],
})
export class EditorModule {}
