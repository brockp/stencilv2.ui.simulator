import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import lottie, { AnimationItem } from "lottie-web";
import { LottieTestService } from "../../containers/lottie-test.service";
import LottieWebParser from "lottie-web-parser";
@Component({
	selector: "app-edit-lottie",
	templateUrl: "./edit-lottie.component.html",
	styleUrls: ["./edit-lottie.component.scss"]
})
export class EditLottieComponent implements OnInit {
	@Input()
	parent!: FormGroup;

	@Input()
	container!: any;

	@Input()
	bioticBlackTheme!: boolean;

	legoAnimation!: AnimationItem;

	constructor(private la: LottieTestService) {}

	ngOnInit(): void {}

	update(): void {
		lottie.destroy();
		this.container = this.la.setTriangleAnimation("#lego");
		this.legoAnimation = this.la.getAnimation(this.container);
	}

	setTriangleColor(): void {
		lottie.destroy();
		this.la.changeColor(this.legoAnimation);
		this.legoAnimation = this.la.getAnimation(this.container);
	}

	updateTwo() {
		lottie.destroy();
		this.container = this.la.setNew("#lego");
		this.legoAnimation = this.la.getNewAnimation(this.container);
	}

	updateThree() {
		lottie.destroy();
		this.container = this.la.setRocket("#lego");
		this.legoAnimation = this.la.getRocketAnimation(this.container);
	}

	setLegoColor() {
		this.bioticBlackTheme = true;
	}
}
