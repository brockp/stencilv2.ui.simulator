import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Renderer2 } from "@angular/core";
import { basicButton } from "../../models/basic-button.interface";
import { TAILWIND } from "../../../../shared/constants/tailwind.constants";

@Component({
	selector: "app-button-form",
	templateUrl: "./button-form.component.html",
	styleUrls: ["./button-form.component.scss"]
})
export class ButtonFormComponent implements OnInit {
	radius = TAILWIND.borderRadius;
	bg = TAILWIND.bgColor;
	width = TAILWIND.width;

	@Input()
	parent!: FormGroup;

	@Input()
	basicButton!: basicButton;

	@Output()
	classChanged = new EventEmitter();

	@Output()
	radiusChanged = new EventEmitter();

	@Output()
	bgColorChanged = new EventEmitter();

	@Output()
	widthChanged = new EventEmitter();

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	setBgColor(name: string, color: any) {
		this.bgColorChanged.emit(color);
		this.parent.get(name)?.setValue(color);
		this.parent.get(name)?.markAsTouched();
	}

	setWidth(formControl: string, width: string) {
		this.widthChanged.emit(width);
		this.parent.get(formControl)?.setValue(width);
		this.parent.get(formControl)?.markAsTouched();
	}

	setRadius(formControl: string, radius: string) {
		this.radiusChanged.emit(radius);
		this.parent.get(formControl)?.setValue(radius);
		this.parent.get(formControl)?.markAsTouched();
	}
}
