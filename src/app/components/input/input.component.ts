import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  preview = 'Email/Password Inputs';

  public input: any = {
    version: '1.0',
    appearance: 'standard',
    label: 'Email',
    placeholder: '',
  };

  public password: any = {
    version: this.input.version,
    appearance: 'standard',
    label: 'Password',
    placeholder: '',
  };

  inputForm = this.fb.group({
    version: this.input.version,
    appearance: this.input.appearance,
    label: this.input.label,
    placeholder: this.input.placeholder,
    passwordAppearance: this.password.appearance,
    passwordLabel: this.password.label,
    passwordPlaceholder: this.password.placeholder,
  });

  constructor(
    public ess: EditSidebarService,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  edit(): void {
    this.ess.showInputEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.input.version = this.inputForm.get('version')!.value;
    this.input.appearance = this.inputForm.get('appearance')!.value;
    this.input.label = this.inputForm.get('label')!.value;
    this.input.placeholder = this.inputForm.get('placeholder')!.value;
    this.password.appearance = this.inputForm.get('passwordAppearance')!.value;
    this.password.label = this.inputForm.get('passwordLabel')!.value;
    this.password.placeholder = this.inputForm.get(
      'passwordPlaceholder'
    )!.value;

    this.toast.show('Noice!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });
    this.closeSidebar();

    console.log('Login inputs configuration: ', this.input);
  }
}
