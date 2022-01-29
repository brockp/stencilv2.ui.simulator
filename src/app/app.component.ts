import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stencil-ui-simulator';
  large = false;
  medium = true;
  desktop = false;
  darkMode = true;



  ngOnInit(): void {

  }



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

  desktopViewPort(): void {
    this.large = false;
    this.medium = false;
    this.desktop = true;
  }

  changeUxTheme(): void {
    this.darkMode = !this.darkMode;
  }


}
