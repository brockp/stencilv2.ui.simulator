import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @Input() carousel: any;
  imgHost = environment.imgHost;
  hideScrollbar!: any;
  active!: boolean;
  inactive!: boolean;
  disabled!: any;
  leftNavDisabled = false;
  index = 0;

  constructor() {}

  ngOnInit(): void {
    this.hideScrollbar = true;
  }

  onIndexChanged(idx: number) {
    this.index = idx;
    console.log('current index: ' + idx);

    if (idx === 0) {
      this.carousel.Nav.LeftNav = this.carousel.Nav.LeftNav = 0; // this.carouselForm.get(['Nav', 'LeftNav'])!.value;
    }
    if (idx !== 0) {
      this.carousel.Nav.LeftNav = this.carousel.Nav.LeftNav = 1; // this.carouselForm.get(['Nav', 'LeftNavAlt'])!.value;
    }
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
