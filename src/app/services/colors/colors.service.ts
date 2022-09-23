import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor() {}

  getAppColors() {
    return [
      {
        name: 'WHITE',
        color: '#ffffff',
        class: 'bg-white',
        textColor: 'text-gray-600',
      },
      {
        name: 'BURG',
        color: '#900',
        class: 'bg-red-800',
        textColor: 'text-white',
      },
      {
        name: 'CT-DARK',
        color: '#261e45',
        class: 'bg-ctdark',
        textColor: 'text-white',
      },
      {
        name: 'CT-LIGHT',
        color: '#3958ff',
        class: 'bg-ctlight',
        textColor: 'text-white',
      },
      {
        name: 'PRIMARY',
        color: '#3589f9',
        class: 'bg-primaryblue',
        textColor: 'text-white',
      },
      {
        name: 'CT-PRIMARY',
        color: '#24232B',
        class: 'bg-ct-primary',
        textColor: 'text-white',
      },
      {
        name: 'P. BLACK',
        color: '#1A152E',
        class: 'bg-purpleblack',
        textColor: 'text-white',
      },
      {
        name: 'L. BLUE',
        color: '#62B4FF',
        class: 'bg-lighterblue',
        textColor: 'text-white',
      },
      {
        name: 'YELLOW',
        color: '#feec4b',
        class: 'bg-yellowpill',
        textColor: 'text-black',
      },
      {
        name: 'DARK #2',
        color: '#141414',
        class: 'bg-secondarydark',
        textColor: 'text-white',
      },
      {
        name: 'LIGHT #1',
        color: '#fafafa',
        class: 'bg-ct-light-primary',
        textColor: 'text-black',
      },
      {
        name: 'LIGHT #2',
        color: '#e5e5e5',
        class: 'bg-ct-light-secondary',
        textColor: 'text-black',
      },
      {
        name: 'LIGHT ALT',
        color: '#cecece',
        class: 'bg-ct-light-accent-one',
        textColor: 'text-black',
      },
      {
        name: 'LIGHT ACC',
        color: '#dbdade',
        class: 'bg-ct-light-accent-two',
        textColor: 'text-black',
      },
      {
        name: 'D. BLUE',
        color: '#1e6fdb',
        class: 'bg-ct-dark-blue',
        textColor: 'text-white',
      },
      {
        name: 'BLUE',
        color: '#3580f0',
        class: 'bg-ct-blue',
        textColor: 'text-white',
      },
      {
        name: 'PURPLE',
        color: '#654cff',
        class: 'bg-ct-dark-purple',
        textColor: 'text-white',
      },
      {
        name: 'EMERALD',
        color: '#19a9a5',
        class: 'bg-ct-emerald',
        textColor: 'text-white',
      },
    ];
  }

  getAppIcons() {
    return [
      {
        name: 'keyboard_arrow_right',
      },
      {
        name: 'keyboard_arrow_left',
      },
      {
        name: 'keyboard_arrow_down',
      },
      {
        name: 'keyboard_arrow_up',
      },
      {
        name: 'search',
      },
      {
        name: 'home',
      },
      {
        name: 'account_circle',
      },
      {
        name: 'settings',
      },
      {
        name: 'done',
      },
      {
        name: 'info',
      },
      {
        name: 'delete',
      },
      {
        name: 'check_circle',
      },
      {
        name: 'shopping_cart',
      },
      {
        name: 'grade',
      },
      {
        name: 'autorenew',
      },
      {
        name: 'add_box',
      },
      {
        name: 'android',
      },
      {
        name: 'apple',
      },
    ];
  }
}
