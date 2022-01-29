import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-signup-graphic',
  templateUrl: './signup-graphic.component.html',
  styleUrls: ['./signup-graphic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupGraphicComponent implements OnInit {
  // multiple form
  public mode: 'view' | 'edit' = 'view';
  public groupedForm!: FormGroup;
  public signUpGraphic = {
    image: 'signup-graphic-one',
  };

  constructor() {}

  ngOnInit(): void {
    this.initGroupedForm();
  }

  initGroupedForm(): void {
    this.groupedForm = new FormGroup({
      image: new FormControl(this.signUpGraphic.image),
    });
  }

  updateGroupedEdition(): void {
    this.signUpGraphic.image = this.groupedForm.get('image')!.value;
  }

  cancelGroupedEdition(): void {
    this.groupedForm.reset();
  }

  handleModeChange(mode: 'view' | 'edit'): void {
    this.mode = mode;
  }
}
