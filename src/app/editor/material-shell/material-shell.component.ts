import { Component, OnInit } from '@angular/core';
import { EditorService } from '@app/services/editor/editor.service';
import { LayoutOptionsService } from '@app/services/layout-options/layout-options.service';
import { ViewportService } from '@app/services/viewport/viewport.service';

@Component({
  selector: 'app-material-shell',
  templateUrl: './material-shell.component.html',
  styleUrls: ['./material-shell.component.scss'],
})
export class MaterialShellComponent implements OnInit {
  constructor(
    public vps: ViewportService,
    public los: LayoutOptionsService,
    public es: EditorService
  ) {}

  ngOnInit(): void {}

  edit(): void {
    this.es.isHidden = true;
  }

  ////////////////////////////////////////////////////
  // Utility functions to support viewport adjustments
  ////////////////////////////////////////////////////

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
