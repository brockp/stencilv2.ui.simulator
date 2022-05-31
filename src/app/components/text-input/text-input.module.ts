import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app/shared/shared.module';

// Components
import { TextInputComponent } from '@app/components/text-input/container/text-input.component';
import { TextInputSelectorComponent } from './text-input-selector/text-input-selector.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [TextInputComponent, TextInputSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    EditableModule,
    DragulaModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
  ],
  exports: [TextInputComponent, TextInputSelectorComponent],
})
export class TextInputModule {}
