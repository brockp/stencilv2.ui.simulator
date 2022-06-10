import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

// Components
import { HeadlineComponent } from '@app/components/headline/container/headline.component';
import { HeadlineSelectorComponent } from './headline-selector/headline-selector.component';
import { DragulaModule } from 'ng2-dragula';
import { TippyModule } from '@ngneat/helipopper';

@NgModule({
  declarations: [HeadlineComponent, HeadlineSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    SharedModule,
    DragulaModule,
    EditableModule,
    TippyModule,
  ],
  exports: [HeadlineComponent, HeadlineSelectorComponent],
})
export class HeadlineModule {}
