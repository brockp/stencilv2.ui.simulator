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
  headlineEdit = false;

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
  textColorChanged = new EventEmitter();

  @Output()
  backgroundColorChanged = new EventEmitter();

  // GET viewConfig FormArray and assign to 'headlines' for use in *ngFor in template
  get headlines(): any {
    return (this.parent.controls['payload'].get('viewConfig') as FormArray)
      .controls;
  }

  constructor(
    public ess: EditSidebarService,
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
    this.headlineEdit = true;
    this.changeDetector.detectChanges();
  }

  // Close edit sidebar
  closeSidebar() {
    this.headlineEdit = false;
    this.changeDetector.detectChanges();
  }

  // EMIT a new version of the component to the editor
  loadVersion(version: number, i: number): void {
    const index = this.headlines.at(i);
    this.hs.findHeadlineConfig(version).subscribe((data: any) => {
      console.log(data);
      this.headline = data;
      index.patchValue({
        Version: this.headline.Version,
        Text: this.headline.Text,
        TextColor: this.headline.TextColor,
        BackgroundColor: this.headline.BackgroundColor,
        Padding: {
          top: this.headline.Padding.top,
          right: this.headline.Padding.right,
          bottom: this.headline.Padding.bottom,
          left: this.headline.Padding.left,
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
      TextColor: color,
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
      BackgroundColor: color,
    });

    // Debug only
    console.log('TARGET FORMGROUP: ', index);
  }

  // Saves component to API as individual component at current array index
  // ex: if index is a '1', then it will save to 'API/H1/1'
  // TODO: Update save function to be dynamic, may need to move it
  saveComponent(i: number) {
    const index = this.headlines.at(i);
    console.log(i);
    this.hs.updateHeadlineConfig(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
