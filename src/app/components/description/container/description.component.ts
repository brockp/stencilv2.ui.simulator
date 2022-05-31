import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { DescriptionService } from '@app/components/description/service/description.service';
import { Description } from '@app/components/description/model/description.interface';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';
import { EditorService } from '@app/services/editor/editor.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  description!: Description;
  colorPalettes!: Colors[];

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

  @Input()
  COMPONENTS!: string;

  @Output()
  versionChanged = new EventEmitter();

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  // GET viewConfig FormArray and assign to 'descriptions' for use in *ngFor in template
  get descriptions(): any {
    return (this.parent.get('finalConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    private es: EditorService,
    public ds: DescriptionService,
    private cs: ColorsService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  update(i: number) {
    const index = this.descriptions.at(i);
    console.log(index.value);
    index.patchValue({
      Text: index.value.configuration_json.Text.value,
    });
    console.log(this.descriptions);
  }

  cancel() {
    console.log('clicked off of editable headline');
  }

  copy(i: number) {
    const index = this.descriptions.at(i).value;
    this.ds.copy(index);
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  // Event from child form
  loadVersion(version: any, i: number): void {
    const index = this.descriptions.at(i);
    this.ds.findDescriptioneConfig(version).subscribe((data: any) => {
      console.log(data);
      this.description = data;
      index.patchValue({
        Text: this.description.configuration_json.Text,
        TextColor: this.description.configuration_json.TextColor,
        BackgroundColor: this.description.configuration_json.BackgroundColor,
        Padding: {
          top: this.description.configuration_json.Padding.top,
          right: this.description.configuration_json.Padding.right,
          bottom: this.description.configuration_json.Padding.bottom,
          left: this.description.configuration_json.Padding.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  // EMIT a new text color of the component to the editor
  setTextColor(color: any, i: number) {
    const index = this.descriptions.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        TextColor: color,
      },
    });
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.descriptions.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        BackgroundColor: color,
      },
    });
  }

  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  saveComponent(i: number) {
    const index = this.descriptions.at(i);
    const objUpdate = index.getRawValue();
    const configuration_json = JSON.stringify(objUpdate.configuration_json);
    const newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('DescriptionConfig: ', newObj);

    this.ds.updateDescriptionConfig(i, newObj).subscribe(() => {});

    this.closeSidebar();
  }
}
