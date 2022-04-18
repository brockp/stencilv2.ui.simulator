import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditSidebarService } from 'src/app/services/edit-sidebar/edit-sidebar.service';
import { AppHeader } from '@app/components/app-header/model/app-header.interface';
import { AppHeaderService } from '@app/components/app-header/service/app-header.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @ViewChild('img') img!: ElementRef;
  id!: number;
  public appHeader: AppHeader = {
    id: this.id,
    Version: '',
    type: '',
    height: '',
    padding: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    Column1Config: {
      HorizontalOptions: '',
    },
    Column2Config: {
      HorizontalOptions: '',
    },
    leftIcon: '',
    rightIcon: '',
    logo: '',
  };
  imgHost = environment.imgHost;
  preview = 'Mobile Header';
  DualColumnView!: string;
  Column1Config: string = 'flex-start';
  Column2Config: string = 'flex-end';
  TriColumnView!: boolean;

  appHeaderForm = this.fb.group({
    Version: '',
    type: '',
    height: '',
    padding: this.fb.group({
      top: '',
      right: '',
      bottom: '',
      left: '',
    }),
    Column1Config: this.fb.group({
      HorizontalOptions: '',
    }),
    Column2Config: this.fb.group({
      HorizontalOptions: '',
    }),
    leftIcon: '',
    rightIcon: '',
    logo: '',
  });

  constructor(
    public ess: EditSidebarService,
    public ahs: AppHeaderService,
    private renderer: Renderer2,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = 1;

    this.ahs.getHeaderConfig(this.id).subscribe((data: any) => {
      this.appHeader = data;
      console.log(this.appHeader);
      this.setInitialValues();
    });
  }

  copy() {
    this.ahs.copy(this.appHeader);
  }

  setInitialValues() {
    this.appHeaderForm.setValue({
      Version: this.appHeader.Version,
      type: this.appHeader.type,
      height: this.appHeader.height,
      padding: {
        top: this.appHeader.padding.top,
        right: this.appHeader.padding.right,
        bottom: this.appHeader.padding.bottom,
        left: this.appHeader.padding.left,
      },
      Column1Config: {
        HorizontalOptions: this.appHeader.Column1Config.HorizontalOptions,
      },
      Column2Config: {
        HorizontalOptions: this.appHeader.Column2Config.HorizontalOptions,
      },
      leftIcon: this.appHeader.leftIcon,
      rightIcon: this.appHeader.rightIcon,
      logo: this.appHeader.logo,
    });
  }

  // Style object for ngStyle
  appHeaderStyleObject(): Object {
    return {
      display: 'grid',
      height: this.appHeader.height + 'px',
      'align-items': 'center',
      'grid-template-columns': this.DualColumnView,
      'padding-top': this.appHeader.padding.top + 'px',
      'padding-right': this.appHeader.padding.right + 'px',
      'padding-bottom': this.appHeader.padding.bottom + 'px',
      'padding-left': this.appHeader.padding.left + 'px',
    };
  }

  horizontalOptionsOne(): Object {
    return {
      display: 'flex',
      'align-items': 'center',
      'justify-content': this.Column1Config,
    };
  }

  horizontalOptionsTwo(): Object {
    return {
      display: 'flex',
      'align-items': 'center',
      'justify-content': this.Column2Config,
    };
  }

  edit(): void {
    this.ess.showHeaderEdit();
  }

  closeSidebar() {
    this.ess.hideHomeEdit();
  }

  loadVersion(versionData: any): void {
    this.ahs.findHeaderConfig(versionData).subscribe((data: any) => {
      this.appHeader = data;
      this.setInitialValues();
    });
  }

  onSubmit(): void {
    this.appHeader.Version = this.appHeaderForm.get('Version')!.value;
    this.appHeader.type = this.appHeaderForm.get('type')!.value;
    this.appHeader.height = this.appHeaderForm.get('height')!.value;
    this.appHeader.padding.top = this.appHeaderForm.get([
      'padding',
      'top',
    ])!.value;
    this.appHeader.padding.right = this.appHeaderForm.get([
      'padding',
      'right',
    ])!.value;
    this.appHeader.padding.bottom = this.appHeaderForm.get([
      'padding',
      'bottom',
    ])!.value;
    this.appHeader.padding.left = this.appHeaderForm.get([
      'padding',
      'left',
    ])!.value;
    this.appHeader.Column1Config.HorizontalOptions = this.appHeaderForm.get([
      'Column1Config',
      'HorizontalOptions',
    ])!.value;
    this.appHeader.Column2Config.HorizontalOptions = this.appHeaderForm.get([
      'Column2Config',
      'HorizontalOptions',
    ])!.value;
    this.appHeader.leftIcon = this.appHeaderForm.get('leftIcon')!.value;
    this.appHeader.logo = this.appHeaderForm.get('logo')!.value;

    this.ahs
      .updateHeadernConfig(1, this.appHeaderForm.value)
      .subscribe((res) => {
        console.log('Header updated!');
        this.closeSidebar();
      });

    // Switch CSS for Angular app only based on ViewConfig for Xamarin
    if (this.appHeader.type === 'DualColumnView') {
      this.DualColumnView = 'repeat(2, minmax(0, 1fr))';
      this.TriColumnView = false;
    }
    if (this.appHeader.type === 'TriColumnView') {
      this.DualColumnView = 'repeat(3, minmax(0, 1fr))';
      this.TriColumnView = true;
    } else {
      this.DualColumnView = this.DualColumnView;
    }

    // Switch CSS for Angular app only based on ViewConfig for Xamarin
    if (this.appHeader.Column1Config.HorizontalOptions === 'Start') {
      this.Column1Config = 'flex-start';
    }
    if (this.appHeader.Column1Config.HorizontalOptions === 'End') {
      this.Column1Config = 'flex-end';
    }
    if (this.appHeader.Column1Config.HorizontalOptions === 'Center') {
      this.Column1Config = 'center';
    }

    // Switch CSS for Angular app only based on ViewConfig for Xamarin
    if (this.appHeader.Column2Config.HorizontalOptions === 'Start') {
      this.Column2Config = 'flex-start';
    }
    if (this.appHeader.Column2Config.HorizontalOptions === 'End') {
      this.Column2Config = 'flex-end';
    }
    if (this.appHeader.Column2Config.HorizontalOptions === 'Center') {
      this.Column2Config = 'center';
    }

    console.log('Mobile Header: ', this.appHeader);
  }

  changeIcon(data: any): void {
    this.renderer.data, (this.appHeader.leftIcon = data);
    this.appHeader.leftIcon = data;
    this.appHeaderForm.get('leftIcon')?.setValue(data);
  }

  changeRightIcon(data: any): void {
    this.renderer.data, (this.appHeader.rightIcon = data);
    this.appHeader.rightIcon = data;
    this.appHeaderForm.get('rightIcon')?.setValue(data);
  }

  changeLogo(data: any): void {
    this.renderer.data, (this.appHeader.logo = data);
    this.appHeader.logo = data;
    this.appHeaderForm.get('logo')?.setValue(data);
  }
}
