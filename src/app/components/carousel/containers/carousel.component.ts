import {
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { trigger, transition, useAnimation } from "@angular/animations";

import { groupedForm } from "src/app/shared/models/edit-in-place.interface";
import { Carousel } from "../models/carousel.interface";
import { fadeIn, fadeOut } from "../carousel.animations";
import { ToggleSidebarService } from "src/app/shared/services/toggle-sidebar.service";
import { SidenavService } from "src/app/shared/services/sidenav.service";

@Component({
	selector: "app-carousel",
	exportAs: "app-carousel",
	templateUrl: "./carousel.component.html",
	styleUrls: ["./carousel.component.scss"],
	animations: [
		trigger("carouselAnimation", [
			transition("void => *", [
				useAnimation(fadeIn, { params: { time: "10ms" } })
			]),
			transition("* => void", [
				useAnimation(fadeOut, { params: { time: "10ms" } })
			])
		])
	]
})
export class CarouselComponent implements OnInit {
	currentSlide = 0;
	active!: boolean;
	inactive!: boolean;
	isShow!: boolean;
	public groupedForm!: groupedForm["groupedForm"];
	public slides: Carousel[] = [
		{
			src: "../../assets/complete-your-profile.svg",
			headline: "Easy to answer",
			description: "The more questions you answer, the more points you get."
		},
		{
			src: "https://cdna.iconscout.com/production/img/illustration.d05a848.svg",
			headline: "Anna",
			description: "Sign up to earn life!"
		},
		{
			src: "https://cdna.iconscout.com/production/img/illustration.d05a848.svg",
			headline: "Merlin",
			description: "Sign up to earn BERLIN!"
		}
	];

	constructor(private renderer: Renderer2, public sbs: SidenavService) {}

	ngOnInit() {
		this.inactive = true;
		this.initGroupedForm();
		console.log(this.slides);
	}

	toggleDisplay() {
		this.sbs.openCarouselEdit();
		// this.isShow = !this.isShow;
	}

	initGroupedForm(): void {
		this.groupedForm = new FormGroup({
			headline: new FormControl(this.slides[0].headline),
			headlineSlideTwo: new FormControl(this.slides[1].headline),
			headlineSlideThree: new FormControl(this.slides[2].headline),
			description: new FormControl(this.slides[0].description),
			descriptionSlideTwo: new FormControl(this.slides[1].description),
			descriptionSlideThree: new FormControl(this.slides[2].description),
			slideOneImage: new FormControl(this.slides[0].src),
			slideTwoImage: new FormControl(this.slides[1].src),
			slideThreeImage: new FormControl(this.slides[2].src)
		});
	}

	updateGroupedEdition(): void {
		this.slides[0].headline = this.groupedForm.get("headline")!.value;
		this.slides[0].description = this.groupedForm.get("description")!.value;
		this.slides[0].src = this.groupedForm.get("slideOneImage")!.value;

		this.slides[1].headline = this.groupedForm.get("headlineSlideTwo")!.value;
		this.slides[1].description = this.groupedForm.get(
			"descriptionSlideTwo"
		)!.value;
		this.slides[1].src = this.groupedForm.get("slideTwoImage")!.value;

		this.slides[2].headline = this.groupedForm.get("headlineSlideThree")!.value;
		this.slides[2].description = this.groupedForm.get(
			"descriptionSlideThree"
		)!.value;
		this.slides[2].src = this.groupedForm.get("slideThreeImage")!.value;
		console.log(this.slides);
	}

	cancelGroupedEdition(): void {
		this.groupedForm.reset();
		this.groupedForm.markAsPristine();
	}

	// Simply moving the slides
	onPreviousClick() {
		const previous = this.currentSlide - 1;
		this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
		console.log("previous clicked, new current slide is: ", this.currentSlide);
	}

	onNextClick() {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
		console.log("next clicked, new current slide is: ", this.currentSlide);
	}

	changeSlideOneImage(imageData: any): void {
		this.renderer.data, (this.slides[0].src = imageData);
		this.slides[0].src = imageData;

		// For debug only
		console.log(this.renderer.data, this.slides);
	}

	changeSlideTwoImage(imageData: any): void {
		this.renderer.data, (this.slides[1].src = imageData);
		this.slides[1].src = imageData;
	}

	changeSlideThreeImage(imageData: any): void {
		this.renderer.data, (this.slides[2].src = imageData);
		this.slides[2].src = imageData;
	}
}
