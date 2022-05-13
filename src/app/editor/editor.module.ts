import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Libraries
import { DragulaModule } from 'ng2-dragula';
import { SortablejsModule } from 'ngx-sortablejs';

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
import { ParagraphModule } from '@app/components/paragraph/paragraph.module';
import { PrimaryButtonModule } from '@app/components/primary-button/primary-button.module';
import { SignUpGraphicModule } from '@app/components/sign-up-graphic/sign-up-graphic.module';
import { TextInputModule } from '@app/components/text-input/text-input.module';
import { TextareaModule } from '@app/components/textarea/textarea.module';
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
@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HeadlineModule,
    AppHeaderModule,
    CarouselModule,
    DescriptionModule,
    IconButtonModule,
    ParagraphModule,
    PrimaryButtonModule,
    SignUpGraphicModule,
    TextInputModule,
    TextareaModule,
    SpacerModule,
    SharedModule,
    DragulaModule.forRoot(),
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  exports: [EditorComponent],
  providers: [ViewportService],
})
export class EditorModule {}
