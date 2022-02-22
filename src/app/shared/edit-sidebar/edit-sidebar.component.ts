import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { SidenavService } from "../services/sidenav.service";

@Component({
	selector: "app-edit-sidebar",
	templateUrl: "./edit-sidebar.component.html",
	styleUrls: ["./edit-sidebar.component.scss"]
})
export class EditSidebarComponent implements OnInit {
	constructor(public sbs: SidenavService) {}

	ngOnInit(): void {}

	toggleSidebar(): void {
		this.sbs.closeAll();
	}
}
