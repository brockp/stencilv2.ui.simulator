import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { IconButtonService } from '@app/components/icon-button/service/icon-button.service';
import { iconButton } from '@app/components/icon-button/model/icon-button.interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  preview = 'Icon Button';
  @Input() id!: number;
  iconButton!: iconButton;

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

  get iconButtons(): any {
    return (this.parent.get('iconButtonConfig') as FormArray).controls;
  }

  constructor(public ess: EditSidebarService, public ibs: IconButtonService) {}

  ngOnInit(): void {}

  copy(i: number) {
    const index = this.iconButtons.at(i).value;
    console.log(index);
    this.ibs.copy(index);
  }

  edit(i: number): void {
    this.ess.showIconButtonEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(version: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.ibs.findIconButton(version).subscribe((data: any) => {
      console.log(data);
      this.iconButton = data;
      index.patchValue({
        id: null,
        Version: this.iconButton.Version,
        Width: this.iconButton.Width,
        CornerRadius: this.iconButton.CornerRadius,
        Text: this.iconButton.Text,
        TextColor: this.iconButton.TextColor,
        CommandName: this.iconButton.CommandName,
        CommandParameter: this.iconButton.CommandParameter,
        BackgroundColor: this.iconButton.BackgroundColor,
        Icon: this.iconButton.Icon,
        Padding: {
          top: this.iconButton.Padding.top,
          right: this.iconButton.Padding.right,
          bottom: this.iconButton.Padding.bottom,
          left: this.iconButton.Padding.left,
        },
        Margin: {
          top: this.iconButton.Margin.top,
          right: this.iconButton.Margin.right,
          bottom: this.iconButton.Margin.bottom,
          left: this.iconButton.Margin.left,
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
      TextColor: color,
    });
  }

  changeBorderRadius(radius: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.borderRadiusChanged.emit(index);
    this.borderRadiusChanged.emit(radius);
    index.patchValue({
      CornerRadius: radius,
    });
  }

  changeBgColor(color: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.backgroundColorChanged.emit(index);
    this.backgroundColorChanged.emit(color);
    index.patchValue({
      BackgroundColor: color,
    });
  }

  changeWidth(width: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.widthChanged.emit(index);
    this.widthChanged.emit(width);
    index.patchValue({
      Width: width,
    });
  }

  changeIcon(icon: any, i: number): void {
    const index = this.iconButtons.at(i);
    this.iconChanged.emit(index);
    this.iconChanged.emit(icon);
    index.patchValue({
      Icon: icon,
    });
  }

  saveComponent(i: number) {
    const index = this.iconButtons.at(i);
    console.log(i);
    this.ibs.updateIconButton(i, index.value).subscribe(() => {});
    this.closeSidebar();
  }
}
