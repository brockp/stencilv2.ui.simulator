import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import lottie, { AnimationItem } from "lottie-web";
import { LottieTestService } from "./lottie-test.service";
import LottieWebParser from "lottie-web-parser";
import { groupedForm } from "src/app/shared/models/edit-in-place.interface";
import anim from "../../../../assets/animations/kanizsa.json";
import { SidenavService } from "src/app/shared/services/sidenav.service";
@Component({
	selector: "app-lottie-test",
	templateUrl: "./lottie-test.component.html",
	styleUrls: ["./lottie-test.component.scss"]
})
export class LottieTestComponent implements OnInit {
	public groupedForm!: groupedForm["groupedForm"];
	legoAnimation!: AnimationItem;
	container: any;
	path: any;
	colorInfo!: any;
	bioticBlackTheme!: boolean;

	constructor(private la: LottieTestService, public sbs: SidenavService) {}

	ngOnInit(): void {
		this.initGroupedForm();
		this.container = this.la.setTriangleAnimation("#lego");
		this.legoAnimation = this.la.getAnimation(this.container);

		console.log(LottieWebParser.parseColors(anim));
	}

	toggleDisplay() {
		this.sbs.openLottiEdit();
	}

	getColorData(): any {
		this.colorInfo = LottieWebParser.parseColors(anim);
		console.log(this.colorInfo);
	}

	initGroupedForm(): void {
		this.groupedForm = new FormGroup({
			path: new FormControl("")
		});
	}

	updateGroupedEdition(): void {
		// this.lottiePath = this.groupedForm.get("path")!.value;
		// this.lottiePath = this.lottiePath;
		// console.log(this.lottiePath);
	}

	cancelGroupedEdition(): void {
		this.groupedForm.reset();
		this.groupedForm.markAsPristine();
	}
}
