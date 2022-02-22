import { Injectable } from "@angular/core";
import lottie from "lottie-web";
import LottieWebParser from "lottie-web-parser";
import anim from "../../../../assets/animations/kanizsa.json";
import animTwo from "../../../../assets/animations/lego.json";
import animThree from "../../../../assets/animations/rocket.json";

@Injectable({
	providedIn: "root"
})
export class LottieTestService {
	// tslint:disable-next-line: no-input-rename
	private legoAnimation = "no";
	private poo = "no";
	private rocket = "no";
	public path!: string;
	public pathTwo!: string;
	public colorInfo!: any;
	constructor() {}

	// tslint:disable-next-line: variable-name
	setTriangleAnimation(_name: string): void {
		this.legoAnimation = _name;
	}

	getTriangleAnimationName(): string {
		return this.legoAnimation;
	}

	// tslint:disable-next-line: variable-name
	setNew(_name: string): void {
		this.poo = _name;
	}

	getNewName(): string {
		return this.poo;
	}

	// tslint:disable-next-line: variable-name
	setRocket(_name: string): void {
		this.rocket = _name;
	}

	getRocketName(): string {
		return this.rocket;
	}

	getAnimation(animate: any): any {
		animate = this.legoAnimation;

		return lottie.loadAnimation({
			container: document.querySelector(this.legoAnimation)!,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: anim
		});
	}

	getNewAnimation(animate: any): any {
		animate = this.poo;

		return lottie.loadAnimation({
			container: document.querySelector(this.poo)!,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animTwo
		});
	}

	getRocketAnimation(animate: any): any {
		animate = this.rocket;

		return lottie.loadAnimation({
			container: document.querySelector(this.rocket)!,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animThree
		});
	}

	changeColor(animate: any): void {
		animate = this.legoAnimation;
		lottie.destroy();
		this.colorInfo = LottieWebParser.parseColors(anim);
		this.path = "layers.0.shapes.0.it.1";
		this.pathTwo = "layers.1.shapes.0.it.2";
		LottieWebParser.replaceColor([98, 180, 255, 1], this.path, anim);
		LottieWebParser.replaceColor([98, 180, 255, 1], this.pathTwo, anim);
		lottie.play();
		console.log(this.colorInfo);
	}
}
