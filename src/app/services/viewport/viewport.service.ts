import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  public android = false;
  public iPhone12 = true;
  public iPhone11 = false;
  public desktop = false;
  public darkMode = true;

  constructor() {}

  public setiPhone11() {
    return (
      (this.android = false),
      (this.iPhone12 = false),
      (this.iPhone11 = true),
      (this.desktop = false)
    );
  }

  public setiPhone12() {
    return (
      (this.android = false),
      (this.iPhone12 = true),
      (this.iPhone11 = false),
      (this.desktop = false)
    );
  }

  public setDesktop() {
    return (
      (this.android = false),
      (this.iPhone12 = false),
      (this.iPhone11 = false),
      (this.desktop = true)
    );
  }

  public setAndroid() {
    return (
      (this.android = true),
      (this.iPhone12 = false),
      (this.iPhone11 = false),
      (this.desktop = false)
    );
  }
}
