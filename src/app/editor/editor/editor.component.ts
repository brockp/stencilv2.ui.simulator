import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DragulaService } from 'ng2-dragula';
import { ViewportService } from '@app/services/viewport/viewport.service';
import { LayoutOptionsService } from '@app/services/layout-options/layout-options.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    public vps: ViewportService,
    private dragulaService: DragulaService,
    public los: LayoutOptionsService
  ) {
    this.dragulaService.createGroup('COMPONENTS', {
      invalid: (handle) => handle!.className === 'sidebar',
      revertOnSpill: true,
    });
  }

  ngOnInit(): void {}

  basicLayout(): void {
    this.los.basicLayoutOptions();
  }

  noFooterLayout(): void {
    this.los.noFooterLayoutOptions();
  }

  noHeaderLayout(): void {
    this.los.noHeaderLayoutOptions();
  }

  verticalLayout(): void {
    this.los.verticalLayoutOptions();
  }

  surveyLayout(): void {
    this.los.surveyLayoutOptions();
  }

  setAndroid(): void {
    this.vps.setAndroid();
  }

  setiPhone12(): void {
    this.vps.setiPhone12();
  }

  setiPhone11(): void {
    this.vps.setiPhone11();
  }

  desktopViewPort(): void {
    this.vps.setDesktop();
  }
}
