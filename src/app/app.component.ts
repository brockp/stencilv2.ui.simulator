import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stencil-ui-simulator';
  large = false;
  medium = true;
  mediumRotated = false;
  desktop = false;
  darkMode = true;

  ngOnInit(): void {}


  largeViewPort(): void {
    this.large = true;
    this.medium = false;
    this.desktop = false;
  }

  mediumViewPort(): void {
    this.large = false;
    this.medium = true;
    this.desktop = false;
  }

  mediumViewPortRotated(): void {
    this.mediumRotated = !this.mediumRotated;
  }

  desktopViewPort(): void {
    this.large = false;
    this.medium = false;
    this.desktop = true;
  }

  changeUxTheme(): void {
    this.darkMode = !this.darkMode;
  }
}
