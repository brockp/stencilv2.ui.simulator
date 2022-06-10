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
import { IconButtonComponent } from '@app/components/icon-button/container/icon-button.component';
import { IconButtonSelectorComponent } from './icon-button-selector/icon-button-selector.component';
import { DragulaModule } from 'ng2-dragula';
import { TippyModule } from '@ngneat/helipopper';

@NgModule({
  declarations: [IconButtonComponent, IconButtonSelectorComponent],
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
  exports: [IconButtonComponent, IconButtonSelectorComponent],
})
export class IconButtonModule {}
