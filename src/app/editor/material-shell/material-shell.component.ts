import { Component, OnInit } from '@angular/core';
import { EditorService } from '@app/services/editor/editor.service';
import { ViewportService } from '@app/services/viewport/viewport.service';

@Component({
  selector: 'app-material-shell',
  templateUrl: './material-shell.component.html',
  styleUrls: ['./material-shell.component.scss'],
})
export class MaterialShellComponent implements OnInit {
  constructor(public vps: ViewportService, public es: EditorService) {}

  ngOnInit(): void {}

  edit(): void {
    this.es.isHidden = true;
  }

  ////////////////////////////////////////////////////
  // Utility functions to support viewport adjustments
  ////////////////////////////////////////////////////
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
