import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorRoutingModule } from '@app/editor/editor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';

import { SpacerComponent } from './container/spacer.component';
import { SpacerFormComponent } from './edit/spacer-form/spacer-form.component';
import { SpacerCodeFormComponent } from './edit/spacer-code-form/spacer-code-form.component';

@NgModule({
  declarations: [SpacerComponent, SpacerFormComponent, SpacerCodeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    EditorRoutingModule,
  ],
  exports: [SpacerComponent],
})
export class SpacerModule {}
