import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-edit-slide-three",
	templateUrl: "./edit-slide-three.component.html",
	styleUrls: ["./edit-slide-three.component.scss"]
})
export class EditSlideThreeComponent implements OnInit {
	@Input()
	slideThree!: FormGroup;

	@Output()
	slideImageThreeChanged = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	setSlideImage(formControl: string, src: any) {
		this.slideImageThreeChanged.emit(src);
		this.slideThree.get(formControl)?.setValue(src);
		this.slideThree.get(formControl)?.markAsTouched();
	}
}
