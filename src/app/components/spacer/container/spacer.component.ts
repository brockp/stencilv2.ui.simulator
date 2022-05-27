import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { SpacerService } from '@app/components/spacer/service/spacer.service';
import { Spacer } from '@app/components/spacer/container/spacer';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent implements OnInit {
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

  update(i: number) {
    const index = this.spacers.at(i);
    console.log(index.value);
    index.patchValue({});
    console.log(this.spacer);
  }

  cancel() {
    console.log('clicked off of editable spacer');
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
    const objUpdate = index.getRawValue();
    const configuration_json = JSON.stringify(objUpdate.configuration_json);
    const newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('SpacerConfig: ', newObj);

    this.ss.updateSpacerConfig(i, newObj).subscribe(() => {});
    this.closeSidebar();
  }
}
