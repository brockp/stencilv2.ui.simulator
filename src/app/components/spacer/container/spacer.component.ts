import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { SpacerService } from '@app/components/spacer/service/spacer.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Spacer } from '@app/components/spacer/container/spacer';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent implements OnInit {
  preview = 'Spacer';
  spacer!: Spacer;

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

  @Output()
  versionChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  get spacers(): any {
    return (this.parent.get('spacerConfig') as FormArray).controls;
  }

  constructor(public ess: EditSidebarService, public ss: SpacerService) {}

  ngOnInit() {}

  copy(i: number) {
    const index = this.spacers.at(i).value;
    console.log(index);
    this.ss.copy(index);
  }

  edit(i: number): void {
    this.ess.showSpacerEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(version: any, i: number): void {
    const index = this.spacers.at(i);
    this.ss.findSpacerConfig(version).subscribe((data: any) => {
      console.log(data);
      this.spacer = data;
      index.patchValue({
        Version: this.spacer.Version,
        Height: this.spacer.Height,
        BackgroundColor: this.spacer.BackgroundColor,
      });
    });
    this.versionChanged.emit(index);
  }

  changeBgColor(color: any, i: number): void {
    const index = this.spacers.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
    });
  }

  saveComponent(i: number) {
    const index = this.spacers.at(i);
    console.log(i);
    this.ss.updateSpacerConfig(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
