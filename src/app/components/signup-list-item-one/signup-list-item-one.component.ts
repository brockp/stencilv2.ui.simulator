import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-signup-list-item-one',
  templateUrl: './signup-list-item-one.component.html',
  styleUrls: ['./signup-list-item-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupListItemOneComponent implements OnInit {
  // multiple form
  public mode: 'view' | 'edit' = 'view';
  public groupedForm!: FormGroup;
  public signUpListItem = {
    icon: 'list-item-icon-money',
    text: 'Take surveys to earn points',
  };

  constructor() {}

  ngOnInit(): void {
    this.initGroupedForm();
  }

  initGroupedForm(): void {
    this.groupedForm = new FormGroup({
      image: new FormControl(this.signUpListItem.icon),
      text: new FormControl(this.signUpListItem.text),
    });
  }

  updateGroupedEdition(): void {
    this.signUpListItem.icon = this.groupedForm.get('image')!.value;
    this.signUpListItem.text = this.groupedForm.get('text')!.value;
  }

  cancelGroupedEdition(): void {
    this.groupedForm.reset();
  }

  handleModeChange(mode: 'view' | 'edit'): void {
    this.mode = mode;
  }
}
