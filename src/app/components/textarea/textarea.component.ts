import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  preview = 'Textarea';

  public textArea: any = {
    version: '1.0',
    appearance: 'standard',
    label: 'Label',
    placeholder: 'Placeholder',
  };

  textAreaForm = this.fb.group({
    version: this.textArea.version,
    appearance: this.textArea.appearance,
    label: this.textArea.label,
    placeholder: this.textArea.placeholder,
  });

  constructor(
    public ess: EditSidebarService,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  edit(): void {
    this.ess.showTextAreaEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.textArea.version = this.textAreaForm.get('version')!.value;
    this.textArea.appearance = this.textAreaForm.get('appearance')!.value;
    this.textArea.label = this.textAreaForm.get('label')!.value;
    this.textArea.placeholder = this.textAreaForm.get('placeholder')!.value;

    this.toast.show('Noice!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });
    this.closeSidebar();

    console.log('Text input configuration: ', this.textArea);
  }
}
