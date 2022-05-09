import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorRoutingModule } from '@app/editor/editor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { SpacerComponent } from './container/spacer.component';

import { SpacerSelectorComponent } from './spacer-selector/spacer-selector.component';

@NgModule({
  declarations: [SpacerComponent, SpacerSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    EditorRoutingModule,
    MaterialModule,
  ],
  exports: [SpacerComponent, SpacerSelectorComponent],
})
export class SpacerModule {}
