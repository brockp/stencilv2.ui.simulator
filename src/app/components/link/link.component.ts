import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  preview = 'Simple Link';
  public link: any = {
    version: '1.0',
    string: 'Click here for more fun!',
    link: 'https://www.google.com',
    textAlign: 'text-center',
  };

  linkForm = this.fb.group({
    version: this.link.version,
    string: this.link.string,
    link: this.link.link,
    textAlign: this.link.textAlign,
  });

  constructor(
    public ess: EditSidebarService,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  edit(): void {
    this.ess.showLinkEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  changeTextAlign(textAlignData: any): void {
    this.renderer.data, (this.link.textAlign = textAlignData);
    this.link.textAlign = textAlignData;

    // For debug only
    console.log(this.renderer.data, this.link);
  }

  onSubmit(): void {
    this.link.version = this.linkForm.get('version')!.value;
    this.link.string = this.linkForm.get('string')!.value;
    this.link.link = this.linkForm.get('link')!.value;
    this.link.textAlign = this.linkForm.get('textAlign')!.value;

    this.toast.show('Noice!', {
      theme: 'snackbar',
      icon: '😎',
      position: 'bottom-center',
    });
    this.closeSidebar();

    console.log('link configuration: ', this.link);
  }
}
