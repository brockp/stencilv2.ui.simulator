import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/shared/material.module';

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
import { GraphicComponent } from '@app/components/graphic/graphic.component';
import { HeadlineTwoComponent } from '@app/components/headline-two/headline-two.component';
import { HeadlineThreeComponent } from '@app/components/headline-three/headline-three.component';

@NgModule({
  declarations: [
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
    GraphicComponent,
    HeadlineTwoComponent,
    HeadlineThreeComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
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
    GraphicComponent,
    HeadlineTwoComponent,
    HeadlineThreeComponent,
  ],
})
export class ComponentsModule {}
