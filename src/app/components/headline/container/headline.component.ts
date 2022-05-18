import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HeadlineService } from '@app/components/headline/service/headline.service';
import { ColorsService } from '@app/services/colors/colors.service';

import { Headline } from '@app/components/headline/model/headline.interface';
import { Colors } from '@app/services/colors/colors.interface';
import { environment } from 'src/environments/environment';
import { EditorService } from '@app/services/editor/editor.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  preview = 'Headline';
  headline!: Headline;
  imgHost = environment.imgHost;
  colorPalettes!: Colors[];

  @Input()
  finalArray!: any[];

  @Input()
  textOnly!: boolean;

  @Input()
  graphicOnly!: boolean;

  @Input()
  payload!: FormGroup;

  @Input()
  TextSize!: string;

  @Input()
  parent!: FormGroup;

  @Output()
  versionChanged = new EventEmitter();

  @Output()
  componentChanged = new EventEmitter();

  @Output()
  textColorChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  // GET viewConfig FormArray and assign to 'headlines' for use in *ngFor in template
  get headlines(): any {
    return (this.parent.get('headlineConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    private es: EditorService,
    public hs: HeadlineService,
    private cs: ColorsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  // COPY component JSON object
  copy(i: number) {
    const index = this.headlines.at(i).value;
    console.log(index);
    this.hs.copy(index);
  }

  // Trigger edit sidebar
  edit(i: number): void {
    const index = this.headlines.at(i);
    this.ess.showHeadlineEdit(index);
  }

  // Close edit sidebar
  closeSidebar() {
    this.ess.hideHomeEdit();
    this.changeDetector.detectChanges();
  }

  // EMIT a new version of the component to the editor
  loadVersion(version: number, i: number): void {
    const index = this.headlines.at(i);
    this.hs.findHeadlineConfig(version).subscribe((data: any) => {
      console.log(data);
      this.headline = data;
      index.patchValue({
        Version: this.headline.version,
        Text: this.headline.configuration_json.Text,
        TextColor: this.headline.configuration_json.TextColor,
        BackgroundColor: this.headline.configuration_json.BackgroundColor,
        Padding: {
          top: this.headline.configuration_json.Padding.top,
          right: this.headline.configuration_json.Padding.right,
          bottom: this.headline.configuration_json.Padding.bottom,
          left: this.headline.configuration_json.Padding.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  // EMIT a new text color of the component to the editor
  setTextColor(color: any, i: number) {
    const index = this.headlines.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        TextColor: color,
      },
    });

    // Debug only
    console.log('TARGET FORMGROUP: ', index);
  }

  // EMIT a new background color of the component to the editor
  setBackgroundColor(color: any, i: number) {
    const index = this.headlines.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        BackgroundColor: color,
      },
    });

    // Debug only
    console.log('TARGET FORMGROUP: ', index);
  }

  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  // TODO: Update save function to be dynamic, may need to move it

  setIcon(formControl: string, name: string) {
    this.componentChanged.emit(name);
    this.parent.get(formControl)?.setValue(name);
    this.parent.get(formControl)?.markAsTouched();
  }

  saveComponent(i: any) {
    const index = this.headlines.at(i);
    let objUpdate = index.getRawValue();
    let configuration_json = JSON.stringify(objUpdate.configuration_json);
    let newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('HeadlineConfig: ', newObj);

    this.hs.updateHeadlineConfig(i, newObj).subscribe(() => {});

    if (this.es.finalArray.length > 0) {
      this.es.finalArray[i] = newObj;
    } else {
      this.es.finalArray.push(newObj);
    }

    this.closeSidebar();
  }
}
