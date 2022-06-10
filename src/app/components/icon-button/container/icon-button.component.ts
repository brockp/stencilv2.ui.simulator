import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { IconButtonService } from '@app/components/icon-button/service/icon-button.service';
import { iconButton } from '@app/components/icon-button/model/icon-button.interface';
import { EditorService } from '@app/services/editor/editor.service';
import { Colors } from '@app/services/colors/colors.interface';
import { ColorsService } from '@app/services/colors/colors.service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  iconButton!: iconButton;
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

  @Output()
  borderRadiusChanged = new EventEmitter();

  @Output()
  widthChanged = new EventEmitter();

  @Output()
  iconChanged = new EventEmitter();

  get iconButtons(): any {
    return (this.parent.get('iconButtonConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    private es: EditorService,
    public ibs: IconButtonService,
    private changeDetector: ChangeDetectorRef,
    private cs: ColorsService
  ) {}

  ngOnInit(): void {
    this.colorPalettes = this.cs.getAppColors();
  }

  update(i: number) {
    const index = this.iconButtons.at(i);
    console.log(index.value);
    index.patchValue({
      Text: index.value.configuration_json.Text.value,
    });
    console.log('IconButon? ', this.iconButtons.value);
  }

  cancel() {
    console.log('clicked off of editable headline');
  }

  copy(i: number) {
    const index = this.iconButtons.at(i).value;
    this.ibs.copy(index);
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
    this.changeDetector.detectChanges();
  }

  loadVersion(version: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.ibs.findIconButton(version).subscribe((data: any) => {
      console.log(data);
      this.iconButton = data;
      index.patchValue({
        id: null,
        Width: this.iconButton.configuration_json.Width,
        CornerRadius: this.iconButton.configuration_json.CornerRadius,
        Text: this.iconButton.configuration_json.Text,
        TextColor: this.iconButton.configuration_json.TextColor,
        CommandName: this.iconButton.configuration_json.CommandName,
        CommandParameter: this.iconButton.configuration_json.CommandParameter,
        BackgroundColor: this.iconButton.configuration_json.BackgroundColor,
        Icon: this.iconButton.configuration_json.Icon,
        Padding: {
          top: this.iconButton.configuration_json.Padding.top,
          right: this.iconButton.configuration_json.Padding.right,
          bottom: this.iconButton.configuration_json.Padding.bottom,
          left: this.iconButton.configuration_json.Padding.left,
        },
        Margin: {
          top: this.iconButton.configuration_json.Margin.top,
          right: this.iconButton.configuration_json.Margin.right,
          bottom: this.iconButton.configuration_json.Margin.bottom,
          left: this.iconButton.configuration_json.Margin.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  // Event from child form
  changeTextColor(color: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      configuration_json: { TextColor: color },
    });
  }

  changeBorderRadius(radius: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.borderRadiusChanged.emit(index);
    this.borderRadiusChanged.emit(radius);
    index.patchValue({
      configuration_json: { CornerRadius: radius },
    });
  }

  changeBgColor(color: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      configuration_json: { BackgroundColor: color },
    });
  }

  changeWidth(width: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.widthChanged.emit(index);
    this.widthChanged.emit(width);
    index.patchValue({
      configuration_json: { Width: width },
    });
  }

  changeIcon(icon: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.iconChanged.emit(index);
    this.iconChanged.emit(icon);
    index.patchValue({
      configuration_json: { Icon: icon },
    });
  }

  saveComponent(i: number) {
    const index = this.iconButtons.at(i);
    let objUpdate = index.getRawValue();
    let configuration_json = JSON.stringify(objUpdate.configuration_json);
    let newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('IconButtonConfig: ', newObj);

    this.ibs.updateIconButton(i, newObj).subscribe(() => {});

    this.closeSidebar();
  }
}
