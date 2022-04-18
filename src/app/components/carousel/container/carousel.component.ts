import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from '@app/services/edit-sidebar/edit-sidebar.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { environment } from 'src/environments/environment';
import { CarouselService } from '@app/components/carousel/service/carousel.service';
import { Carousel } from '../model/carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;
  imgHost = environment.imgHost;
  preview = 'Carousel';
  hideScrollbar!: any;
  active!: boolean;
  inactive!: boolean;
  disabled!: any;
  leftNavDisabled = false;
  index = 0;
  id!: number;
  carousel: Carousel = {
    id: this.id,
    Version: '',
    SectionOne: {
      Source: '',
      h1: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
      h2: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
    },
    SectionTwo: {
      Source: '',
      h1: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
      h2: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
    },
    SectionThree: {
      Source: '',
      h1: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
      h2: {
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      },
    },
    Nav: {
      Version: '',
      LeftNav: '',
      LeftNavInitialCommand: '',
      LeftNavAlt: '',
      RightNav: '',
    },
  };

  carouselForm = this.fb.group({
    Version: '',
    SectionOne: this.fb.group({
      Source: '',
      h1: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
      h2: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
    }),
    SectionTwo: this.fb.group({
      Source: '',
      h1: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
      h2: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
    }),
    SectionThree: this.fb.group({
      Source: '',
      h1: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
      h2: this.fb.group({
        Version: '',
        Text: '',
        TextColor: '',
        BackgroundColor: '',
      }),
    }),
    Nav: this.fb.group({
      Version: '',
      LeftNav: '',
      LeftNavInitialCommand: '',
      LeftNavAlt: '',
      RightNav: '',
    }),
  });

  constructor(
    private fb: FormBuilder,
    public ess: EditSidebarService,
    public cs: CarouselService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.hideScrollbar = true;
    this.id = 1;

    // Get the component config from JSON
    this.cs.getCarouselConfig(this.id).subscribe((data: any) => {
      this.carousel = data;
      console.log(this.carousel);
      this.setInitialValues();
    });
  }

  copy() {
    this.cs.copy(this.carousel);
  }

  setInitialValues() {
    this.carouselForm.setValue({
      Version: this.carousel.Version,
      SectionOne: {
        Source: this.carousel.SectionOne.Source,
        h1: {
          Version: this.carousel.SectionOne.h1.Version,
          Text: this.carousel.SectionOne.h1.Text,
          TextColor: this.carousel.SectionOne.h1.TextColor,
          BackgroundColor: this.carousel.SectionOne.h1.BackgroundColor,
        },
        h2: {
          Version: this.carousel.SectionOne.h2.Version,
          Text: this.carousel.SectionOne.h2.Text,
          TextColor: this.carousel.SectionOne.h2.TextColor,
          BackgroundColor: this.carousel.SectionOne.h2.BackgroundColor,
        },
      },
      SectionTwo: {
        Source: this.carousel.SectionTwo.Source,
        h1: {
          Version: this.carousel.SectionTwo.h1.Version,
          Text: this.carousel.SectionTwo.h1.Text,
          TextColor: this.carousel.SectionTwo.h1.TextColor,
          BackgroundColor: this.carousel.SectionTwo.h1.BackgroundColor,
        },
        h2: {
          Version: this.carousel.SectionTwo.h2.Version,
          Text: this.carousel.SectionTwo.h2.Text,
          TextColor: this.carousel.SectionTwo.h2.TextColor,
          BackgroundColor: this.carousel.SectionTwo.h2.BackgroundColor,
        },
      },
      SectionThree: {
        Source: this.carousel.SectionThree.Source,
        h1: {
          Version: this.carousel.SectionThree.h1.Version,
          Text: this.carousel.SectionThree.h1.Text,
          TextColor: this.carousel.SectionThree.h1.TextColor,
          BackgroundColor: this.carousel.SectionThree.h1.BackgroundColor,
        },
        h2: {
          Version: this.carousel.SectionThree.h2.Version,
          Text: this.carousel.SectionThree.h2.Text,
          TextColor: this.carousel.SectionThree.h2.TextColor,
          BackgroundColor: this.carousel.SectionThree.h2.BackgroundColor,
        },
      },
      Nav: {
        Version: this.carousel.Nav.Version,
        LeftNav: this.carousel.Nav.LeftNav,
        LeftNavInitialCommand: this.carousel.Nav.LeftNavInitialCommand,
        LeftNavAlt: this.carousel.Nav.LeftNavAlt,
        RightNav: this.carousel.Nav.RightNav,
      },
    });
  }

  onIndexChanged(idx: number) {
    this.index = idx;
    console.log('current index: ' + idx);

    if (idx === 0) {
      this.carousel.Nav.LeftNav = this.carousel.Nav.LeftNav =
        this.carouselForm.get(['Nav', 'LeftNav'])!.value;
    }
    if (idx !== 0) {
      this.carousel.Nav.LeftNav = this.carousel.Nav.LeftNav =
        this.carouselForm.get(['Nav', 'LeftNavAlt'])!.value;
    }
  }

  headlineStyleObject(): Object {
    return {
      color: this.carousel.SectionOne.h1.TextColor,
    };
  }

  h2StyleObject(): Object {
    return {
      color: this.carousel.SectionOne.h2.TextColor,
    };
  }

  headlineSectionTwoStyleObject(): Object {
    return {
      color: this.carousel.SectionTwo.h1.TextColor,
    };
  }

  h2SectionTwoStyleObject(): Object {
    return {
      color: this.carousel.SectionTwo.h2.TextColor,
    };
  }

  headlineSectionThreeStyleObject(): Object {
    return {
      color: this.carousel.SectionThree.h1.TextColor,
    };
  }

  h2SectionThreeStyleObject(): Object {
    return {
      color: this.carousel.SectionThree.h2.TextColor,
    };
  }

  edit() {
    this.ess.showCarouselEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  loadVersion(versionData: any): void {
    this.cs.findCarouselConfig(versionData).subscribe((data: any) => {
      this.carousel = data;
      this.setInitialValues();
    });
  }

  changeGraphic(data: any): void {
    this.renderer.data, (this.carousel.SectionOne.Source = data);
    this.carousel.SectionOne.Source = data;
    this.carouselForm.get(['SectionOne', 'Source'])?.setValue(data);
  }

  changeSectionTwoGraphic(data: any): void {
    this.renderer.data, (this.carousel.SectionTwo.Source = data);
    this.carousel.SectionTwo.Source = data;
    this.carouselForm.get(['SectionTwo', 'Source'])?.setValue(data);
  }

  changeSectionThreeGraphic(data: any): void {
    this.renderer.data, (this.carousel.SectionThree.Source = data);
    this.carousel.SectionThree.Source = data;
    this.carouselForm.get(['SectionThree', 'Source'])?.setValue(data);
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  // Event from child form
  changeTextColor(textColorData: any): void {
    textColorData = this.carouselForm.get([
      'SectionOne',
      'h1',
      'TextColor',
    ])!.value;
  }

  // Event from child form
  changeSectionTwoTextColor(textColorData: any): void {
    textColorData = this.carouselForm.get([
      'SectionTwo',
      'h1',
      'TextColor',
    ])!.value;
  }

  // Event from child form
  changeSectionThreeTextColor(textColorData: any): void {
    textColorData = this.carouselForm.get([
      'SectionThree',
      'h1',
      'TextColor',
    ])!.value;
  }

  onSubmit() {
    // Section One
    this.carousel.Version = this.carouselForm.get('Version')!.value;
    this.carousel.SectionOne.h1.Text = this.carouselForm.get([
      'SectionOne',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionOne.h1.Text = this.carouselForm.get([
      'SectionOne',
      'h1',
      'Text',
    ])!.value;
    this.carousel.SectionOne.h1.TextColor = this.carouselForm.get([
      'SectionOne',
      'h1',
      'TextColor',
    ])!.value;
    this.carousel.SectionOne.h2.Text = this.carouselForm.get([
      'SectionOne',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionOne.h2.Text = this.carouselForm.get([
      'SectionOne',
      'h2',
      'Text',
    ])!.value;

    // Section Two
    this.carousel.SectionTwo.h1.Text = this.carouselForm.get([
      'SectionTwo',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionTwo.h1.Text = this.carouselForm.get([
      'SectionTwo',
      'h1',
      'Text',
    ])!.value;
    this.carousel.SectionTwo.h1.TextColor = this.carouselForm.get([
      'SectionTwo',
      'h1',
      'TextColor',
    ])!.value;
    this.carousel.SectionTwo.h2.Text = this.carouselForm.get([
      'SectionTwo',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionTwo.h2.Text = this.carouselForm.get([
      'SectionTwo',
      'h2',
      'Text',
    ])!.value;

    // Section three
    this.carousel.SectionThree.h1.Text = this.carouselForm.get([
      'SectionThree',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionThree.h1.Text = this.carouselForm.get([
      'SectionThree',
      'h1',
      'Text',
    ])!.value;
    this.carousel.SectionThree.h1.TextColor = this.carouselForm.get([
      'SectionThree',
      'h1',
      'TextColor',
    ])!.value;
    this.carousel.SectionThree.h2.Text = this.carouselForm.get([
      'SectionThree',
      'h1',
      'Version',
    ])!.value;
    this.carousel.SectionThree.h2.Text = this.carouselForm.get([
      'SectionThree',
      'h2',
      'Text',
    ])!.value;

    // Nav buttons
    this.carousel.Nav.Version = this.carouselForm.get([
      'Nav',
      'Version',
    ])!.value;
    this.carousel.Nav.LeftNav = this.carouselForm.get([
      'Nav',
      'LeftNav',
    ])!.value;
    this.carousel.Nav.LeftNavInitialCommand = this.carouselForm.get([
      'Nav',
      'LeftNavInitialCommand',
    ])!.value;
    this.carousel.Nav.LeftNavAlt = this.carouselForm.get([
      'Nav',
      'LeftNavAlt',
    ])!.value;
    this.carousel.Nav.RightNav = this.carouselForm.get([
      'Nav',
      'RightNav',
    ])!.value;

    // Update the server JSON with new values
    this.cs
      .updateCarouselConfig(1, this.carouselForm.value)
      .subscribe((res) => {
        console.log('updated');
        // Close edit sidebar
        this.closeSidebar();
      });

    // Console log new values of JSON (Debug only)
    console.log('<Carousel Components>: ', this.carousel);
  }
}
