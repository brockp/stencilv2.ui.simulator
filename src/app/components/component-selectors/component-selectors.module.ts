import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { MaterialModule } from '@app/shared/material.module';
import { HeadlineWIconSelectorComponent } from './headline-w-icon-selector/headline-w-icon-selector.component';
import { FullEntrySelectorComponent } from './full-entry-selector/full-entry-selector.component';

@NgModule({
  declarations: [
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
    HeadlineWIconSelectorComponent,
    FullEntrySelectorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
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
    HeadlineWIconSelectorComponent,
    FullEntrySelectorComponent,
  ],
})
export class ComponentSelectorsModule {}
