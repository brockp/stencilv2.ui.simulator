import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// App libraries
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EditableModule } from '@ngneat/edit-in-place';

// Components
import { DescriptionComponent } from '@app/components/description/container/description.component';
import { DescriptionSelectorComponent } from './description-selector/description-selector.component';
import { DragulaModule } from 'ng2-dragula';
import { TippyModule } from '@ngneat/helipopper';

@NgModule({
  declarations: [DescriptionComponent, DescriptionSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    EditableModule,
    DragulaModule,
    TippyModule,
  ],
  exports: [DescriptionComponent, DescriptionSelectorComponent],
})
export class DescriptionModule {}
