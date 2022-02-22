import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LottieWebParser } from "lottie-web-parser";
// Library Modules
import { DragulaModule } from "ng2-dragula";
import { EditableModule } from "@ngneat/edit-in-place";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSidenavModule } from "@angular/material/sidenav";

// App Components
import { AppComponent } from "./app.component";
import { EditButtonComponent } from "./shared/edit-button/edit-button.component";
import { SaveButtonComponent } from "./shared/save-button/save-button.component";
import { CancelButtonComponent } from "./shared/cancel-button/cancel-button.component";
import { MobileHeaderComponent } from "./components/mobile-header/containers/mobile-header.component";
import { SignupGraphicComponent } from "./components/signup-graphic/signup-graphic.component";
import { SignupListItemOneComponent } from "./components/signup-list-item-one/signup-list-item-one.component";
import { SignupListItemTwoComponent } from "./components/signup-list-item-two/signup-list-item-two.component";
import { EditSidebarComponent } from "./shared/edit-sidebar/edit-sidebar.component";
import { BasicButtonComponent } from "./components/button/containers/basic-button/basic-button.component";
import { ButtonFormComponent } from "./components/button/edit-component/button-form/button-form.component";
import { SidenavService } from "./shared/services/sidenav.service";

// Reference only
import { StockInventoryModule } from "./reactive-form-example/stock-inventory/stock-inventory.module";
import { AppContainerComponent } from "./app-container/app-container.component";
import { CarouselComponent } from "./components/carousel/containers/carousel.component";
import { CarouselFormComponent } from "./components/carousel/edit-component/carousel-form/carousel-form.component";
import { EditSlideOneComponent } from "./components/carousel/edit-component/edit-slide-one/edit-slide-one.component";
import { EditSlideTwoComponent } from "./components/carousel/edit-component/edit-slide-two/edit-slide-two.component";
import { EditSlideThreeComponent } from "./components/carousel/edit-component/edit-slide-three/edit-slide-three.component";

import { LottieTestComponent } from "./components/lottie-test/containers/lottie-test.component";
import { EditMobileHeaderComponent } from "./components/mobile-header/edit-component/edit-mobile-header/edit-mobile-header.component";
import { EditLottieComponent } from "./components/lottie-test/edit-component/edit-lottie/edit-lottie.component";
import { CrowdtapGridComponent } from "./components/crowdtap-grid/containers/crowdtap-grid.component";
import { EditCrowdtapGridComponent } from "./components/crowdtap-grid/edit-component/edit-crowdtap-grid/edit-crowdtap-grid.component";

@NgModule({
	declarations: [
		AppComponent,
		EditButtonComponent,
		SaveButtonComponent,
		CancelButtonComponent,
		MobileHeaderComponent,
		SignupGraphicComponent,
		SignupListItemOneComponent,
		SignupListItemTwoComponent,
		EditSidebarComponent,
		AppContainerComponent,
		BasicButtonComponent,
		ButtonFormComponent,
		CarouselComponent,
		CarouselFormComponent,
		EditSlideOneComponent,
		EditSlideTwoComponent,
		EditSlideThreeComponent,
		LottieTestComponent,
		EditMobileHeaderComponent,
		EditLottieComponent,
		CrowdtapGridComponent,
		EditCrowdtapGridComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DragulaModule.forRoot(),
		EditableModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		StockInventoryModule,
		MatExpansionModule,
		MatSidenavModule
	],
	providers: [SidenavService],
	bootstrap: [AppComponent]
})
export class AppModule {}
