import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Libraries
import { EditableModule } from '@ngneat/edit-in-place';
import { SortablejsModule } from 'ngx-sortablejs';
import { TippyModule, popperVariation } from '@ngneat/helipopper';

// Services
import { ViewportService } from '@app/services/viewport/viewport.service';

// Shared Modules
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

// Global Components (used either for global layout or as primary parents)
import { EditorComponent } from '@app/editor/editor/editor.component';
import { MaterialShellComponent } from '@app/editor/material-shell/material-shell.component';
import { BasecomponentTwoComponent } from '@app/components/basecomponent-two/basecomponent.component';
import { LoadConfigDialogComponent } from './load-config-dialog/load-config-dialog.component';

// Components
import { HeadlineComponent } from '@app/components/headline/headline.component';
import { PlaintextComponent } from '@app/components/plaintext/plaintext.component';
import { SlimentryComponent } from '@app/components/slimentry/slimentry.component';
import { SlimeditorComponent } from '@app/components/slimeditor/slimeditor.component';
import { DropdownComponent } from '@app/components/dropdown/dropdown.component';
import { SpacerComponent } from '@app/components/spacer/spacer.component';
import { ExpandingTextComponent } from '@app/components/expanding-text/expanding-text.component';
import { AppHeaderComponent } from '@app/components/app-header/app-header.component';
import { HeaderTitleBarComponent } from '@app/components/header-title-bar/header-title-bar.component';
import { PrimaryButtonComponent } from '@app/components/primary-button/primary-button.component';

// Selectors
import { BaseSelectorTwoComponent } from '@app/components/component-selectors/description-selector/base-selector.component';
import { ImageSelectorComponent } from '@app/components/component-selectors/image-selector/image-selector.component';
import { HeadlineSelectorComponent } from '@app/components/component-selectors/headline-selector/headline-selector.component';
import { ButtonSelectorComponent } from '@app/components/component-selectors/button-selector/button-selector.component';
import { IconButtonSelectorComponent } from '@app/components/component-selectors/icon-button-selector/icon-button-selector.component';
import { InputSelectorComponent } from '@app/components/component-selectors/input-selector/input-selector.component';
import { DropdownSelectorComponent } from '@app/components/component-selectors/dropdown-selector/dropdown-selector.component';
import { AppheaderSelectorComponent } from '@app/components/component-selectors/appheader-selector/appheader-selector.component';
import { SlimEditorSelectorComponent } from '@app/components/component-selectors/slim-editor-selector/slim-editor-selector.component';
import { SpacerSelectorComponent } from '@app/components/component-selectors/spacer-selector/spacer-selector.component';
import { HeadlineTwoSelectorComponent } from '@app/components/component-selectors/headline-two-selector/headline-two-selector.component';
import { HeadlineThreeSelectorComponent } from '@app/components/component-selectors/headline-three-selector/headline-three-selector.component';
import { ExpandingTextSelectorComponent } from '@app/components/component-selectors/expanding-text-selector/expanding-text-selector.component';
import { HeaderTitleBarSelectorComponent } from '@app/components/component-selectors/header-title-bar-selector/header-title-bar-selector.component';

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
    SlimEditorSelectorComponent,
    SpacerSelectorComponent,
    HeadlineTwoSelectorComponent,
    HeadlineThreeSelectorComponent,
    ExpandingTextSelectorComponent,
    HeaderTitleBarSelectorComponent,
    HeadlineComponent,
    PlaintextComponent,
    SlimentryComponent,
    SlimeditorComponent,
    DropdownComponent,
    SpacerComponent,
    ExpandingTextComponent,
    AppHeaderComponent,
    HeaderTitleBarComponent,
    PrimaryButtonComponent,
    LoadConfigDialogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    MaterialModule,
    FormsModule,
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
