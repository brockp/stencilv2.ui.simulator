import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutOptionsService {
  public basic = true;
  public noFooter = false;
  public noHeader = false;
  public vertical = false;

  constructor() {}

  basicLayoutOptions(): void {
    this.basic = true;
    this.noFooter = false;
    this.noHeader = false;
    this.vertical = false;
  }

  noFooterLayoutOptions(): void {
    this.basic = false;
    this.noFooter = true;
    this.noHeader = false;
    this.vertical = false;
  }

  noHeaderLayoutOptions(): void {
    this.basic = false;
    this.noFooter = false;
    this.noHeader = true;
    this.vertical = false;
  }

  verticalLayoutOptions(): void {
    this.basic = false;
    this.noFooter = false;
    this.noHeader = false;
    this.vertical = true;
  }

  surveyLayoutOptions(): void {
    this.basic = false;
    this.noFooter = false;
    this.noHeader = false;
    this.vertical = false;
  }
}
