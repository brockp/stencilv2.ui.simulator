import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HeadlineService } from '@app/components/headline/service/headline.service';
import { Headline } from '@app/components/headline/model/headline.interface';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  preview = 'Headline';
  public headline!: Headline;
  @Input() id!: number;
  // Set initial formGroups
  headlineForm = this.fb.group({
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
    private fb: FormBuilder,
    public hs: HeadlineService
  ) {}

  ngOnInit(): void {
    this.id = this.id;

    // Get the component config from JSON
    this.hs.getHeadlineConfig(this.id).subscribe((data: any) => {
      this.headline = data;
      console.log(data);
      this.setInitialValues();
    });
  }

  copy() {
    this.hs.copy(this.headline);
  }

  setInitialValues() {
    this.headlineForm.setValue({
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
  }

  // Style object for ngStyle
  styleObject(): Object {
    return {
      color: this.headline.TextColor,
      'padding-top': this.headline.Padding.top + 'px',
      'padding-right': this.headline.Padding.right + 'px',
      'padding-bottom': this.headline.Padding.bottom + 'px',
      'padding-left': this.headline.Padding.left + 'px',
    };
  }

  // Trigger edit sidebar
  edit(): void {
    this.ess.showHeadlineEdit();
  }

  // Close edit sidebar
  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(versionData: any): void {
    this.hs.findHeadlineConfig(versionData).subscribe((data: any) => {
      this.headline = data;
      console.log(this.headline);
      this.setInitialValues();
    });
  }

  // Event from child form
  changeTextColor(textColorData: any): void {
    textColorData = this.headlineForm.get('TextColor')!.value;
  }

  // Event from child form
  changeBgColor(bgColorData: any): void {
    bgColorData = this.headlineForm.get('BackgroundColor')!.value;
  }

  // Event from child form
  changePadding(data: any) {
    data = this.headlineForm.get('Padding')!.value;
  }

  // Submit/Save button logic
  onSubmit(): void {
    // Assigning new form values to component style simulation
    this.headline.Version = this.headlineForm.get('Version')!.value;
    this.headline.Text = this.headlineForm.get('Text')!.value;
    this.headline.TextColor = this.headlineForm.get('TextColor')!.value;
    this.headline.BackgroundColor =
      this.headlineForm.get('BackgroundColor')!.value;
    this.headline.Padding.top = this.headlineForm.get([
      'Padding',
      'top',
    ])!.value;
    this.headline.Padding.right = this.headlineForm.get([
      'Padding',
      'right',
    ])!.value;
    this.headline.Padding.bottom = this.headlineForm.get([
      'Padding',
      'bottom',
    ])!.value;
    this.headline.Padding.left = this.headlineForm.get([
      'Padding',
      'left',
    ])!.value;

    // Update the server JSON with new values
    this.hs
      .updateHeadlineConfig(this.id, this.headlineForm.value)
      .subscribe(() => {
        console.log('Headline updated!');
        // Close edit sidebar
        this.closeSidebar();
      });

    // Console log new values of JSON (Debug only)
    console.log('<H1 Context>: ', this.headline);
  }
}
