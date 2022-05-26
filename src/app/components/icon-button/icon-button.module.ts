import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';
import { SortablejsModule } from 'ngx-sortablejs';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

// Components
import { IconButtonComponent } from '@app/components/icon-button/container/icon-button.component';
import { IconButtonSelectorComponent } from './icon-button-selector/icon-button-selector.component';

@NgModule({
  declarations: [IconButtonComponent, IconButtonSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    EditableModule,
    SortablejsModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [IconButtonComponent, IconButtonSelectorComponent],
})
export class IconButtonModule {}
