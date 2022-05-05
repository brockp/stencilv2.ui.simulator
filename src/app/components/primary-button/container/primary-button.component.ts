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
  preview = 'Primary Button';
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
    return (this.parent.get('buttonConfig') as FormArray).controls;
  }

  constructor(
    public ess: EditSidebarService,
    public ibs: PrimaryButtonService
  ) {}

  ngOnInit(): void {}

  copy(i: number) {
    const index = this.buttons.at(i).value;
    console.log(index);
    this.ibs.copy(index);
  }

  edit(i: number): void {
    this.ess.showPrimaryButtonEdit();
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
        Version: this.primaryButton.Version,
        Width: this.primaryButton.Width,
        CornerRadius: this.primaryButton.CornerRadius,
        Text: this.primaryButton.Text,
        TextColor: this.primaryButton.TextColor,
        CommandName: this.primaryButton.CommandName,
        CommandParameter: this.primaryButton.CommandParameter,
        BackgroundColor: this.primaryButton.BackgroundColor,
        Padding: {
          top: this.primaryButton.Padding.top,
          right: this.primaryButton.Padding.right,
          bottom: this.primaryButton.Padding.bottom,
          left: this.primaryButton.Padding.left,
        },
        Margin: {
          top: this.primaryButton.Margin.top,
          right: this.primaryButton.Margin.right,
          bottom: this.primaryButton.Margin.bottom,
          left: this.primaryButton.Margin.left,
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
      TextColor: color,
    });
  }

  changeBorderRadius(radius: any, i: number): void {
    const index = this.buttons.at(i);
    this.borderRadiusChanged.emit(index);
    this.borderRadiusChanged.emit(radius);
    index.patchValue({
      CornerRadius: radius,
    });
  }

  changeBgColor(color: any, i: number): void {
    const index = this.buttons.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
    });
  }

  changeWidth(width: any, i: number): void {
    const index = this.buttons.at(i);
    this.widthChanged.emit(index);
    this.widthChanged.emit(width);
    index.patchValue({
      Width: width,
    });
  }

  changeIcon(icon: any, i: number): void {
    const index = this.buttons.at(i);
    this.iconChanged.emit(index);
    this.iconChanged.emit(icon);
    index.patchValue({
      Icon: icon,
    });
  }

  saveComponent(i: number) {
    const index = this.buttons.at(i);
    console.log(i);
    this.ibs.updatePrimaryButton(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
