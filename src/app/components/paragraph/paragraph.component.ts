import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements OnInit {
  preview = 'Paragraph';
  public paragraph: any = {
    version: '1.0',
    string: 'or',
  };

  paragraphForm = this.fb.group({
    version: this.paragraph.version,
    string: this.paragraph.string,
  });

  constructor(
    public ess: EditSidebarService,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  edit(): void {
    this.ess.showParagraphEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  onSubmit(): void {
    this.paragraph.string = this.paragraphForm.get('string')!.value;

    this.toast.show('Noice!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });
    this.closeSidebar();

    console.log('paragraph configuration: ', this.paragraph);
  }
}
