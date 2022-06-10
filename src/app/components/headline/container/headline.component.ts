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
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  headline!: Headline;
  imgHost = environment.imgHost;
  colorPalettes!: Colors[];

  @Input()
  graphicOnly!: boolean;

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

  // GET viewConfig FormArray and assign to 'headlines' for use in *ngFor in template
  get headlines(): any {
    return (this.parent.get('headlineConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    private es: EditorService,
    public hs: HeadlineService,
    private cs: ColorsService,
    private changeDetector: ChangeDetectorRef,
    private dragulaService: DragulaService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  update(i: number) {
    const index = this.headlines.at(i);
    console.log(index.value);
    index.patchValue({
      Text: index.value.configuration_json.Text.value,
    });
  }

  cancel() {
    console.log('clicked off of editable headline');
  }

  // COPY component JSON object
  copy(i: number) {
    const index = this.headlines.at(i).value;
    this.hs.copy(index);
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
      const luu = data;
      index.patchValue({
        Text: luu.value,
        TextColor: luu.TextColor,
        BackgroundColor: luu.BackgroundColor,
        Padding: {
          top: luu.top,
          right: luu.right,
          bottom: luu.bottom,
          left: luu.left,
        },
      });
    });
    this.parent.updateValueAndValidity();
    this.changeDetector.detectChanges();
  }

  // EMIT a new text color of the component to the editor
  setTextColor(color: any, i: number) {
    const index = this.headlines.at(i);
    this.textColorChanged.emit(i);
    this.textColorChanged.emit(color);
    index.patchValue({
      configuration_json: {
        TextColor: color,
      },
    });
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
  }

  get headlineConfig() {
    return this.parent.get('headlineConfig') as FormArray;
  }

  isHeadline(headline: any) {
    return headline.component === 'h1';
  }
  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  saveComponent(i: any) {
    const index = this.headlines.at(i);
    const objUpdate = index.getRawValue();
    const configuration_json = JSON.stringify(objUpdate.configuration_json);
    const newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('HeadlineConfig: ', newObj);

    this.hs.updateHeadlineConfig(i, newObj).subscribe(() => {});

    this.closeSidebar();
  }
}
