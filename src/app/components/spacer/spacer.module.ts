import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';
import { SortablejsModule } from 'ngx-sortablejs';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

// Components
import { SpacerComponent } from './container/spacer.component';
import { SpacerSelectorComponent } from './spacer-selector/spacer-selector.component';

@NgModule({
  declarations: [SpacerComponent, SpacerSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    EditableModule,
    SortablejsModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [SpacerComponent, SpacerSelectorComponent],
})
export class SpacerModule {}
