import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SidenavService } from "src/app/shared/services/sidenav.service";

@Component({
	selector: "app-crowdtap-grid",
	templateUrl: "./crowdtap-grid.component.html",
	styleUrls: ["./crowdtap-grid.component.scss"]
})
export class CrowdtapGridComponent implements OnInit {
	public groupedForm!: FormGroup;
	tile = {
		bgColor: "bg-ctlight",
		bgColorTwo: "bg-purple-400",
		bgColorThree: "bg-red-400",
		bgColorFour: "bg-blue-300",
		bgColorFive: "bg-purple-300",
		bgColorSix: "bg-red-300",
		bgColorSeven: "bg-blue-200",
		bgColorEight: "bg-purple-200",
		bgColorNine: "bg-red-200"
	};

	constructor(public sbs: SidenavService, private renderer: Renderer2) {}

	ngOnInit(): void {
		this.initGroupedForm();
	}

	toggleDisplay() {
		this.sbs.openTileEdit();
	}

	initGroupedForm(): void {
		this.groupedForm = new FormGroup({
			bgColor: new FormControl(this.tile.bgColor),
			bgColorTwo: new FormControl(this.tile.bgColorTwo),
			bgColorThree: new FormControl(this.tile.bgColorThree),
			bgColorFour: new FormControl(this.tile.bgColorFour),
			bgColorFive: new FormControl(this.tile.bgColorFive),
			bgColorSix: new FormControl(this.tile.bgColorSix),
			bgColorSeven: new FormControl(this.tile.bgColorSeven),
			bgColorEight: new FormControl(this.tile.bgColorEight),
			bgColorNine: new FormControl(this.tile.bgColorNine)
		});
	}

	updateGroupedEdition(): void {
		this.tile.bgColor = this.groupedForm.get("bgColor")!.value;
		this.tile.bgColorTwo = this.groupedForm.get("bgColorTwo")!.value;
		this.tile.bgColorThree = this.groupedForm.get("bgColorThree")!.value;
		this.tile.bgColorFour = this.groupedForm.get("bgColorFour")!.value;
		this.tile.bgColorFive = this.groupedForm.get("bgColorFive")!.value;
		this.tile.bgColorSix = this.groupedForm.get("bgColorSix")!.value;
		this.tile.bgColorSeven = this.groupedForm.get("bgColorSeven")!.value;
		this.tile.bgColorEight = this.groupedForm.get("bgColorEight")!.value;
		this.tile.bgColorNine = this.groupedForm.get("bgColorNine")!.value;
	}

	cancelGroupedEdition(): void {
		this.groupedForm.reset();
	}

	changeBgColor(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColor = bgColorData);
		this.tile.bgColor = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorTwo(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorTwo = bgColorData);
		this.tile.bgColorTwo = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorThree(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorThree = bgColorData);
		this.tile.bgColorThree = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorFour(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorFour = bgColorData);
		this.tile.bgColorFour = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorFive(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorFive = bgColorData);
		this.tile.bgColorFive = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorSix(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorSix = bgColorData);
		this.tile.bgColorSix = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorSeven(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorSeven = bgColorData);
		this.tile.bgColorSeven = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorEight(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorEight = bgColorData);
		this.tile.bgColorEight = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}

	changeBgColorNine(bgColorData: any): void {
		this.renderer.data, (this.tile.bgColorNine = bgColorData);
		this.tile.bgColorNine = bgColorData;
		// For debug only
		console.log(this.renderer.data, this.tile);
	}
}
