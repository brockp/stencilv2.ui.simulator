import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

// Components
import { PrimaryButtonComponent } from '@app/components/primary-button/container/primary-button.component';
import { PrimaryButtonSelectorComponent } from './primary-button-selector/primary-button-selector.component';
import { DragulaModule } from 'ng2-dragula';
import { TippyModule } from '@ngneat/helipopper';

@NgModule({
  declarations: [PrimaryButtonComponent, PrimaryButtonSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    EditableModule,
    DragulaModule,
    MatIconModule,
    MatTabsModule,
    TippyModule,
  ],
  exports: [PrimaryButtonComponent, PrimaryButtonSelectorComponent],
})
export class PrimaryButtonModule {}
