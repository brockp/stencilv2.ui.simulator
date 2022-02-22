import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SidenavService } from "src/app/shared/services/sidenav.service";
import { RewardPill } from "../models/reward-pill.interface";

@Component({
	selector: "app-mobile-header",
	templateUrl: "./mobile-header.component.html",
	styleUrls: ["./mobile-header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class MobileHeaderComponent implements OnInit {
	// multiple form
	public mode: "view" | "edit" = "view";
	public groupedForm!: FormGroup;
	public rewardPill: RewardPill = {
		rewardCount: "1000",
		bgColor: "bg-yellowpill",
		textColor: "text-black",
		src: "../../assets/icons/coin-icon.svg"
	};
	noDrag!: false;

	constructor(public sbs: SidenavService, private renderer: Renderer2) {}

	ngOnInit(): void {
		this.initGroupedForm();
	}

	toggleDisplay() {
		this.sbs.openMobileHeaderEdit();
	}

	initGroupedForm(): void {
		this.groupedForm = new FormGroup({
			name: new FormControl(this.rewardPill.rewardCount),
			textColor: new FormControl(this.rewardPill.textColor),
			icon: new FormControl(this.rewardPill.src)
		});
	}

	updateGroupedEdition(): void {
		this.rewardPill.rewardCount = this.groupedForm.get("name")!.value;
		this.rewardPill.textColor = this.groupedForm.get("textColor")!.value;
		this.rewardPill.src = this.groupedForm.get("icon")!.value;
	}

	cancelGroupedEdition(): void {
		this.groupedForm.reset();
	}

	changeBgColor(bgColorData: any): void {
		this.renderer.data, (this.rewardPill.bgColor = bgColorData);
		this.rewardPill.bgColor = bgColorData;

		// For debug only
		console.log(this.renderer.data, this.rewardPill);
	}

	changeIconImage(imageData: any): void {
		this.renderer.data, (this.rewardPill.src = imageData);
		this.rewardPill.src = imageData;

		// For debug only
		console.log(this.renderer.data, this.rewardPill);
	}

	changeTextColor(textColorData: any): void {
		this.renderer.data, (this.rewardPill.textColor = textColorData);
		this.rewardPill.textColor = textColorData;

		// For debug only
		console.log(this.renderer.data, this.rewardPill);
	}
}
