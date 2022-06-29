import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Libraries
import { EditableModule } from '@ngneat/edit-in-place';

// Services
import { ViewportService } from '../services/viewport/viewport.service';

// Helper Components
import { SharedModule } from '@app/shared/shared.module';
import { TippyModule, popperVariation } from '@ngneat/helipopper';
import { MaterialModule } from '@app/shared/material.module';

// Components
import { EditorComponent } from './editor/editor.component';
import { MaterialShellComponent } from './material-shell/material-shell.component';
import { BasecomponentTwoComponent } from '@app/components/basecomponent-two/basecomponent.component';
import { BaseSelectorTwoComponent } from '@app/components/component-selectors/description-selector/base-selector.component';
import { ImageSelectorComponent } from '@app/components/component-selectors/image-selector/image-selector.component';
import { HeadlineSelectorComponent } from '@app/components/component-selectors/headline-selector/headline-selector.component';
import { ButtonSelectorComponent } from '@app/components/component-selectors/button-selector/button-selector.component';
import { IconButtonSelectorComponent } from '@app/components/component-selectors/icon-button-selector/icon-button-selector.component';
import { InputSelectorComponent } from '@app/components/component-selectors/input-selector/input-selector.component';
import { DropdownSelectorComponent } from '@app/components/component-selectors/dropdown-selector/dropdown-selector.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { AppheaderSelectorComponent } from '@app/components/component-selectors/appheader-selector/appheader-selector.component';

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
    AppheaderSelectorComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    EditableModule,
    SharedModule,
    SortablejsModule,
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
