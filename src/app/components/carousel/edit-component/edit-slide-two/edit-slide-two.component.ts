import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-edit-slide-two",
	templateUrl: "./edit-slide-two.component.html",
	styleUrls: ["./edit-slide-two.component.scss"]
})
export class EditSlideTwoComponent implements OnInit {
	@Input()
	slideTwo!: FormGroup;

	@Output()
	slideImageTwoChanged = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	setSlideImage(formControl: string, src: any) {
		this.slideImageTwoChanged.emit(src);
		this.slideTwo.get(formControl)?.setValue(src);
		this.slideTwo.get(formControl)?.markAsTouched();
	}
}
