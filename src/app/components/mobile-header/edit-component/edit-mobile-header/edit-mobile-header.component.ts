import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TAILWIND } from "src/app/shared/constants/tailwind.constants";

@Component({
	selector: "app-edit-mobile-header",
	templateUrl: "./edit-mobile-header.component.html",
	styleUrls: ["./edit-mobile-header.component.scss"]
})
export class EditMobileHeaderComponent implements OnInit {
	bg = TAILWIND.bgColor;
	text = TAILWIND.textColor;

	@Input()
	parent!: FormGroup;

	@Output()
	bgColorChanged = new EventEmitter();

	@Output()
	iconChanged = new EventEmitter();

	@Output()
	textColorChanged = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	setBgColor(formControl: string, color: any) {
		this.bgColorChanged.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setIconImage(formControl: string, src: any) {
		this.iconChanged.emit(src);
		this.parent.get(formControl)?.setValue(src);
		this.parent.get(formControl)?.markAsTouched();
	}

	setTextColor(formControl: string, color: any) {
		this.textColorChanged.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}
}
