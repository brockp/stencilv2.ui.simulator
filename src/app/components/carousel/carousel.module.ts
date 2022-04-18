import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@app/shared/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { CarouselComponent } from '@app/components/carousel/container/carousel.component';
import { CarouselFormComponent } from '@app/components/carousel/edit/carousel-form/carousel-form.component';
import { CarouselCodeFormComponent } from '@app/components/carousel/edit/carousel-code-form/carousel-code-form.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselFormComponent,
    CarouselCodeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    DragScrollModule,
    MaterialModule,
  ],
  exports: [
    CarouselComponent,
    CarouselFormComponent,
    CarouselCodeFormComponent,
  ],
})
export class CarouselModule {}
