import { Component, Input, OnInit } from '@angular/core';
import { EditSidebarService } from '../../services/edit-sidebar/edit-sidebar.service';

@Component({
  selector: 'app-editor-sidebar',
  templateUrl: './editor-sidebar.component.html',
  styleUrls: ['./editor-sidebar.component.scss'],
})
export class EditorSidebarComponent implements OnInit {
  constructor(public ess: EditSidebarService) {}

  ngOnInit(): void {}

  closeSidebar() {
    this.ess.hideHomeEdit();
  }
}
