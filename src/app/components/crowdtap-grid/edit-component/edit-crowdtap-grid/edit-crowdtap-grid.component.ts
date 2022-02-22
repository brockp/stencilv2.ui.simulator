import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TAILWIND } from "src/app/shared/constants/tailwind.constants";

@Component({
	selector: "app-edit-crowdtap-grid",
	templateUrl: "./edit-crowdtap-grid.component.html",
	styleUrls: ["./edit-crowdtap-grid.component.scss"]
})
export class EditCrowdtapGridComponent implements OnInit {
	bg = TAILWIND.bgColor;
	text = TAILWIND.textColor;

	@Input()
	parent!: FormGroup;

	@Output()
	bgColorChanged = new EventEmitter();

	@Output()
	bgColorChangedTwo = new EventEmitter();

	@Output()
	bgColorChangedThree = new EventEmitter();

	@Output()
	bgColorChangedFour = new EventEmitter();

	@Output()
	bgColorChangedFive = new EventEmitter();

	@Output()
	bgColorChangedSix = new EventEmitter();

	@Output()
	bgColorChangedSeven = new EventEmitter();

	@Output()
	bgColorChangedEight = new EventEmitter();

	@Output()
	bgColorChangedNine = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	setBgColor(formControl: string, color: any) {
		this.bgColorChanged.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorTwo(formControl: string, color: any) {
		this.bgColorChangedTwo.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorThree(formControl: string, color: any) {
		this.bgColorChangedThree.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorFour(formControl: string, color: any) {
		this.bgColorChangedFour.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorFive(formControl: string, color: any) {
		this.bgColorChangedFive.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorSix(formControl: string, color: any) {
		this.bgColorChangedSix.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorSeven(formControl: string, color: any) {
		this.bgColorChangedSeven.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorEight(formControl: string, color: any) {
		this.bgColorChangedEight.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}

	setBgColorNine(formControl: string, color: any) {
		this.bgColorChangedNine.emit(color);
		this.parent.get(formControl)?.setValue(color);
		this.parent.get(formControl)?.markAsTouched();
	}
}
