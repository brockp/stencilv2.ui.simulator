import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { SpacerService } from '@app/components/spacer/service/spacer.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Spacer } from '@app/components/spacer/container/spacer';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent implements OnInit {
  preview = 'Spacer';
  @Input() id!: number;
  luu!: any;

  public spacer: Spacer = {
    id: this.luu,
    Version: '',
    Height: '',
    BackgroundColor: '',
  };

  spacerForm = this.fb.group({
    Version: '',
    Height: '',
    BackgroundColor: '',
  });

  constructor(
    public ess: EditSidebarService,
    public ss: SpacerService,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.id = this.id;

    this.ss.getSpacerConfig(this.id).subscribe((data: any) => {
      this.spacer = data;
      console.log(this.spacer);
      this.setInitialValues();
    });
  }

  setInitialValues() {
    this.spacerForm.setValue({
      Version: this.spacer.Version,
      Height: this.spacer.Height,
      BackgroundColor: this.spacer.BackgroundColor,
    });
  }

  loadVersion(versionData: any): void {
    this.ss.findSpacerConfig(versionData).subscribe((data: any) => {
      this.spacer = data;
      this.setInitialValues();
    });
  }

  copyJSON() {
    this.ss.copy(this.spacer);
  }

  styleObject(): Object {
    return {
      height: this.spacer.Height + 'px',
      'background-color': this.spacer.BackgroundColor,
    };
  }

  edit(): void {
    this.ess.showSpacerEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  // Event from child form
  changeBgColor(bgColorData: any): void {
    bgColorData = this.spacerForm.get('BackgroundColor')!.value;
  }

  onSubmit(): void {
    this.spacer.Version = this.spacerForm.get('Version')!.value;
    this.spacer.Height = this.spacerForm.get('Height')!.value;
    this.spacer.BackgroundColor = this.spacerForm.get('BackgroundColor')!.value;

    this.ss
      .updateSpacerConfig(this.id, this.spacerForm.value)
      .subscribe((res) => {
        console.log('Spacer updated!');
        this.closeSidebar();
      });

    console.log('Spacer Context: ', this.spacer);
  }
}
