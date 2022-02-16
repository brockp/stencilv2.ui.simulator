import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-edit-slide-one",
	templateUrl: "./edit-slide-one.component.html",
	styleUrls: ["./edit-slide-one.component.scss"]
})
export class EditSlideOneComponent implements OnInit {
	@Input()
	child!: FormGroup;

	@Output()
	imageChanged = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	setSlideImage(formControl: string, src: any) {
		this.imageChanged.emit(src);
		this.child.get(formControl)?.setValue(src);
		this.child.get(formControl)?.markAsTouched();
	}
}
