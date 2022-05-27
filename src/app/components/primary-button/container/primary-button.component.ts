import {
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
import { primaryButton } from '@app/components/primary-button/model/primary-button.interface';
import { PrimaryButtonService } from '@app/components/primary-button/service/primary-button.service';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  primaryButton!: primaryButton;

  @Input()
  payload!: FormGroup;

  @Input()
  parent!: FormGroup;

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

  get buttons(): any {
    return (this.parent.get('finalConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    public ibs: PrimaryButtonService
  ) {}

  ngOnInit(): void {}

  update(i: number) {
    const index = this.buttons.at(i);
    console.log(index.value);
    index.patchValue({
      Text: index.value.configuration_json.Text.value,
    });
    console.log(this.buttons);
  }

  cancel() {
    console.log('clicked off of editable primary button');
  }

  copy(i: number) {
    const index = this.buttons.at(i).value;
    this.ibs.copy(index);
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(version: any, i: number): void {
    const index = this.buttons.at(i);
    this.ibs.findPrimaryButton(version).subscribe((data: any) => {
      console.log(data);
      this.primaryButton = data;
      index.patchValue({
        id: null,
        Width: this.primaryButton.configuration_json.Width,
        CornerRadius: this.primaryButton.configuration_json.CornerRadius,
        Text: this.primaryButton.configuration_json.Text,
        TextColor: this.primaryButton.configuration_json.TextColor,
        CommandName: this.primaryButton.configuration_json.CommandName,
        CommandParameter:
          this.primaryButton.configuration_json.CommandParameter,
        BackgroundColor: this.primaryButton.configuration_json.BackgroundColor,
        Padding: {
          top: this.primaryButton.configuration_json.Padding.top,
          right: this.primaryButton.configuration_json.Padding.right,
          bottom: this.primaryButton.configuration_json.Padding.bottom,
          left: this.primaryButton.configuration_json.Padding.left,
        },
        Margin: {
          top: this.primaryButton.configuration_json.Margin.top,
          right: this.primaryButton.configuration_json.Margin.right,
          bottom: this.primaryButton.configuration_json.Margin.bottom,
          left: this.primaryButton.configuration_json.Margin.left,
        },
      });
    });
    this.versionChanged.emit(index);
  }

  // Event from child form
  changeTextColor(color: any, i: number): void {
    const index = this.buttons.at(i);
    this.textColorChanged.emit(index);
    this.textColorChanged.emit(color);
    index.patchValue({
      configuration_json: { TextColor: color },
    });
  }

  changeBorderRadius(radius: any, i: number): void {
    const index = this.buttons.at(i);
    this.borderRadiusChanged.emit(index);
    this.borderRadiusChanged.emit(radius);
    index.patchValue({
      configuration_json: { CornerRadius: radius },
    });
  }

  changeBgColor(color: any, i: number): void {
    const index = this.buttons.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      configuration_json: { BackgroundColor: color },
    });
  }

  changeWidth(width: any, i: number): void {
    const index = this.buttons.at(i);
    this.widthChanged.emit(index);
    this.widthChanged.emit(width);
    index.patchValue({
      configuration_json: { Width: width },
    });
  }

  changeIcon(icon: any, i: number): void {
    const index = this.buttons.at(i);
    this.iconChanged.emit(index);
    this.iconChanged.emit(icon);
    index.patchValue({
      configuration_json: { Icon: icon },
    });
  }

  saveComponent(i: number) {
    const index = this.buttons.at(i);
    const objUpdate = index.getRawValue();
    const configuration_json = JSON.stringify(objUpdate.configuration_json);
    const newObj = {
      id: objUpdate.id + 1,
      component: objUpdate.component,
      configuration_json,
    };

    console.log('PrimaryButtonConfig: ', newObj);

    this.ibs.updatePrimaryButton(i, newObj).subscribe(() => {});

    this.closeSidebar();
  }
}
