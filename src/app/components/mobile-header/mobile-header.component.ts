import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MobileHeaderComponent implements OnInit {
  // multiple form
  public mode: 'view' | 'edit' = 'view';
  public groupedForm!: FormGroup;
  public rewardPill = {
    rewardCount: '1000',
    rewardIcon: 'coin-icon',
  };
  noDrag!: false;

  ngOnInit(): void {
    this.initGroupedForm();
  }

  initGroupedForm(): void {
    this.groupedForm = new FormGroup({
      name: new FormControl(this.rewardPill.rewardCount),
      icon: new FormControl(this.rewardPill.rewardIcon),
    });
  }

  updateGroupedEdition(): void {
    this.rewardPill.rewardCount = this.groupedForm.get('name')!.value;
    this.rewardPill.rewardIcon = this.groupedForm.get('icon')!.value;
  }

  cancelGroupedEdition(): void {
    this.groupedForm.reset();
  }

  handleModeChange(mode: 'view' | 'edit'): void {
    this.mode = mode;
  }
}
