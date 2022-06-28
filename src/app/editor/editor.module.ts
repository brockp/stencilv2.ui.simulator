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
// import { HeadlineModule } from '@app/components/headline/headline.module';
// import { AppHeaderModule } from '@app/components/app-header/app-header.module';
// import { CarouselModule } from '@app/components/carousel/carousel.module';
// import { DescriptionModule } from '@app/components/description/description.module';
// import { PrimaryButtonModule } from '@app/components/primary-button/primary-button.module';
// import { SignUpGraphicModule } from '@app/components/sign-up-graphic/sign-up-graphic.module';
// import { TextInputModule } from '@app/components/text-input/text-input.module';
// import { SpacerModule } from '@app/components/spacer/spacer.module';

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

import { BasecomponentTwoComponent } from '@app/components/basecomponent-two/basecomponent.component';
import { BaseSelectorTwoComponent } from '@app/components/component-selectors/description-selector/base-selector.component';
import { ImageSelectorComponent } from '@app/components/component-selectors/image-selector/image-selector.component';
import { HeadlineSelectorComponent } from '@app/components/component-selectors/headline-selector/headline-selector.component';
import { ButtonSelectorComponent } from '@app/components/component-selectors/button-selector/button-selector.component';
import { IconButtonSelectorComponent } from '@app/components/component-selectors/icon-button-selector/icon-button-selector.component';
import { InputSelectorComponent } from '@app/components/component-selectors/input-selector/input-selector.component';
import { DropdownSelectorComponent } from '@app/components/component-selectors/dropdown-selector/dropdown-selector.component';

@NgModule({
  declarations: [
    EditorComponent,
    MaterialShellComponent,
    BasecomponentTwoComponent,
    BaseSelectorTwoComponent,
    ImageSelectorComponent,
    HeadlineSelectorComponent,
    ButtonSelectorComponent,
    IconButtonSelectorComponent,
    InputSelectorComponent,
    DropdownSelectorComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    EditableModule,
    SharedModule,
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
