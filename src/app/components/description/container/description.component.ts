import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { DescriptionService } from '@app/components/description/service/description.service';
import { Description } from '@app/components/description/model/description.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  preview = 'Description';
  @Input() id!: number;
  luu: number = 1;
  public description!: Description;

  descriptionForm = this.fb.group({
    Version: '',
    Text: '',
    TextColor: '',
    BackgroundColor: '',
    Padding: this.fb.group({
      top: '',
      right: '',
      bottom: '',
      left: '',
    }),
  });

  constructor(
    public ess: EditSidebarService,
    public ds: DescriptionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Make dynamic
    this.id = this.id;

    this.ds.getDescriptioneConfig(this.id).subscribe((data: any) => {
      this.description = data;
      console.log('Description: ', this.id);
      this.setInitialValues();
    });
  }

  createDescrition() {
    const luu = this.id++;
    this.ds
      .createDescriptionConfig(luu, this.descriptionForm.value)
      .subscribe(() => {
        console.log('Description created!');
      });

    this.ds.getDescriptioneConfig(luu).subscribe((data: any) => {
      this.description = data;
      console.log('Description: ', this.description);
    });
  }

  copy() {
    this.ds.copy(this.description);
  }

  setInitialValues() {
    this.descriptionForm.setValue({
      Version: this.description.Version,
      Text: this.description.Text,
      TextColor: this.description.TextColor,
      BackgroundColor: this.description.BackgroundColor,
      Padding: {
        top: this.description.Padding.top,
        right: this.description.Padding.right,
        bottom: this.description.Padding.bottom,
        left: this.description.Padding.left,
      },
    });
  }

  // Style object for ngStyle
  styleObject(): Object {
    return {
      color: this.description.TextColor,
      'padding-top': this.description.Padding.top + 'px',
      'padding-right': this.description.Padding.right + 'px',
      'padding-bottom': this.description.Padding.bottom + 'px',
      'padding-left': this.description.Padding.left + 'px',
    };
  }

  edit(): void {
    this.ess.showDescriptionEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  // Event from child form
  loadVersion(versionData: any): void {
    this.ds.findDescriptioneConfig(versionData).subscribe((data: any) => {
      this.description = data;
      this.setInitialValues();
    });
  }

  // Event from child form
  changeTextColor(textColorData: any): void {
    textColorData = this.descriptionForm.get('TextColor')!.value;
  }

  // Event from child form
  changeBgColor(bgColorData: any): void {
    bgColorData = this.descriptionForm.get('BackgroundColor')!.value;
  }

  // Event from child form
  changePadding(data: any) {
    data = this.descriptionForm.get('Padding')!.value;
  }

  onSubmit(): void {
    // Assigning new form values to component style simulation
    this.description.Version = this.descriptionForm.get('Version')!.value;
    this.description.Text = this.descriptionForm.get('Text')!.value;
    this.description.TextColor = this.descriptionForm.get('TextColor')!.value;
    this.description.BackgroundColor =
      this.descriptionForm.get('BackgroundColor')!.value;
    this.description.Padding.top = this.descriptionForm.get([
      'Padding',
      'top',
    ])!.value;
    this.description.Padding.right = this.descriptionForm.get([
      'Padding',
      'right',
    ])!.value;
    this.description.Padding.bottom = this.descriptionForm.get([
      'Padding',
      'bottom',
    ])!.value;
    this.description.Padding.left = this.descriptionForm.get([
      'Padding',
      'left',
    ])!.value;

    this.ds
      .updateDescriptionConfig(this.id, this.descriptionForm.value)
      .subscribe(() => {
        console.log(this.id);
      });

    this.closeSidebar();

    console.log('<H2 Context>: ', this.description);
  }
}
