import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	Renderer2
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Carousel } from "../../models/carousel.interface";

@Component({
	selector: "app-carousel-form",
	templateUrl: "./carousel-form.component.html",
	styleUrls: ["./carousel-form.component.scss"]
})
export class CarouselFormComponent implements OnInit {
	@Input()
	parent!: FormGroup;

	@Input()
	slides!: Carousel[];

	@Output()
	imageChanged = new EventEmitter();

	@Output()
	slideTwoImageChanged = new EventEmitter();

	@Output()
	slideThreeImageChanged = new EventEmitter();

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	setSlideImage(formControl: string, src: any) {
		this.imageChanged.emit(src);
		this.parent.get(formControl)?.setValue(src);
		this.parent.get(formControl)?.markAsTouched();
	}

	changeSlideOneImage(imageData: any): void {
		this.imageChanged.emit(imageData);
		this.parent.get(imageData)?.setValue(imageData);
		this.parent.get(imageData)?.markAsTouched();
	}

	changeSlideTwoImage(imageData: any): void {
		this.slideTwoImageChanged.emit(imageData);
		this.parent.get(imageData)?.setValue(imageData);
		this.parent.get(imageData)?.markAsTouched();
	}

	changeSlideThreeImage(imageData: any): void {
		this.slideThreeImageChanged.emit(imageData);
		this.parent.get(imageData)?.setValue(imageData);
		this.parent.get(imageData)?.markAsTouched();
	}
}
