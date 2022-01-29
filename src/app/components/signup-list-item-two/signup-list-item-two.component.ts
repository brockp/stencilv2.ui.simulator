import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-signup-list-item-two',
  templateUrl: './signup-list-item-two.component.html',
  styleUrls: ['./signup-list-item-two.component.scss'],
})
export class SignupListItemTwoComponent implements OnInit {
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
