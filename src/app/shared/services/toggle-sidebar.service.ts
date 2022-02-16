import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebarService {
  isShow: boolean = false;

  constructor() {}

  openSidebar() {
    return (this.isShow = true);
  }

  closeSidebar() {
    return (this.isShow = true);
  }

}
