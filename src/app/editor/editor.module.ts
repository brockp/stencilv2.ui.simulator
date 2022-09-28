import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { ComponentsModule } from '@app/components/components.module';
import { ComponentSelectorsModule } from '@app/components/component-selectors/component-selectors.module';

// Libraries
import { EditableModule } from '@ngneat/edit-in-place';
import { SortablejsModule } from 'ngx-sortablejs';

// Services
import { ViewportService } from '@app/services/viewport/viewport.service';

// Shared Module
import { SharedModule } from '@app/shared/shared.module';

// Global Components (used either for global layout or as primary parents)
import { EditorComponent } from '@app/editor/editor/editor.component';
import { MaterialShellComponent } from '@app/editor/material-shell/material-shell.component';
import { BasecomponentTwoComponent } from '@app/components/basecomponent-two/basecomponent.component';
import { LoadConfigDialogComponent } from './load-config-dialog/load-config-dialog.component';

@NgModule({
  declarations: [
    EditorComponent,
    MaterialShellComponent,
    BasecomponentTwoComponent,
    LoadConfigDialogComponent,
  ],
  imports: [
    ComponentsModule,
    ComponentSelectorsModule,
    CommonModule,
    HttpClientModule,
    EditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditableModule,
    SharedModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  exports: [EditorComponent],
  providers: [ViewportService],
})
export class EditorModule {}
