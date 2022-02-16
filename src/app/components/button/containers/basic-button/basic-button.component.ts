import {
	Component,
	ElementRef,
	Input,
	OnInit,
	Renderer2,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { basicButton } from "../../models/basic-button.interface";
import { groupedForm } from "src/app/shared/models/edit-in-place.interface";
import { mode } from "src/app/shared/constants/edit-in-place.constants";
import { ToggleSidebarService } from "src/app/shared/services/toggle-sidebar.service";
import { SidenavService } from "src/app/shared/services/sidenav.service";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
	selector: "app-basic-button",
	templateUrl: "./basic-button.component.html",
	styleUrls: ["./basic-button.component.scss"]
})
export class BasicButtonComponent implements OnInit {
	@ViewChild("button") button!: ElementRef;
	public mode = mode;
	public groupedForm!: groupedForm["groupedForm"];
	public basicButton: basicButton["config"] = {
		text: "Sign Up Now",
		bgColor: "bg-ctlight",
		borderRadius: "rounded-sm",
		width: "w-full"
	};

	constructor(private renderer: Renderer2, public sbs: SidenavService) {}

	ngOnInit(): void {
		this.initGroupedForm();
	}

	toggleDisplay() {
		this.sbs.toggle();
		// this.isShow = !this.isShow;
	}

	changeBorderRadius(radiusData: any): void {
		this.renderer.data, (this.basicButton.borderRadius = radiusData);
		this.basicButton.borderRadius = radiusData;

		// For debug only
		console.log(this.renderer.data, this.basicButton);
	}

	changeBgColor(bgColorData: any): void {
		this.renderer.data, (this.basicButton.bgColor = bgColorData);
		this.basicButton.bgColor = bgColorData;

		// For debug only
		console.log(this.renderer.data, this.basicButton);
	}

	changeWidth(buttonWidthData: any): void {
		this.renderer.data, (this.basicButton.width = buttonWidthData);
		this.basicButton.width = buttonWidthData;

		// For debug only
		console.log(this.renderer.data, this.basicButton);
	}

	initGroupedForm(): void {
		this.groupedForm = new FormGroup({
			button: new FormControl(this.basicButton.text),
			borderRadius: new FormControl(""),
			bgColor: new FormControl(""),
			width: new FormControl("")
		});
	}

	// Dynamically create formGroup (testing)
	createStyle(style: any) {
		return new FormGroup({
			backgroundColor: new FormControl(style.bgColor),
			borderRadius: new FormControl(style.borderRadius || "rounded-sm")
		});
	}

	updateGroupedEdition(): void {
		this.basicButton.text = this.groupedForm.get("button")!.value;

		console.log(this.basicButton);
	}

	cancelGroupedEdition(): void {
		this.groupedForm.reset();
		this.groupedForm.markAsPristine();
	}

	handleModeChange(mode: "view" | "edit"): void {
		this.mode = mode;
	}
}
