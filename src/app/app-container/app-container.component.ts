import {
	Component,
	Input,
	OnInit,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { DragulaService } from "ng2-dragula";
import { SidenavService } from "../shared/services/sidenav.service";

@Component({
	selector: "app-container",
	templateUrl: "./app-container.component.html",
	styleUrls: ["./app-container.component.scss"]
})
export class AppContainerComponent implements OnInit {
	@ViewChild("sidenav") public sidenav!: MatSidenav;
	large = false;
	medium = true;
	mediumRotated = false;
	desktop = false;
	darkMode = true;
	div = "div";
	constructor(private ds: DragulaService, public sbs: SidenavService) {
		ds.createGroup("COMPONENTS", {});
	}

	ngOnInit(): void {}

	toggleDisplay() {
		this.sbs.toggle();
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
