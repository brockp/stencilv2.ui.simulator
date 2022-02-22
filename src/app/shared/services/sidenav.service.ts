import { Injectable } from "@angular/core";

@Injectable()
export class SidenavService {
	public isShow!: boolean;
	public editCarousel!: boolean;
	public editMobileHeader!: boolean;
	public editLottie!: boolean;
	public editTiles!: boolean;

	// public setSidenav(sidenav: any) {
	// 	this.sidenav = sidenav;
	// }

	public open() {
		return (this.isShow = true);
	}

	public openCarouselEdit() {
		return (this.editCarousel = true);
	}

	public openMobileHeaderEdit() {
		return (this.editMobileHeader = true);
	}

	public openLottiEdit() {
		return (this.editLottie = true);
	}

	public openTileEdit() {
		return (this.editTiles = true);
	}

	public close() {
		return (this.isShow = false);
	}

	public closeAll() {
		this.isShow = false;
		this.editCarousel = false;
		this.editMobileHeader = false;
		this.editLottie = false;
		this.editTiles = false;
	}

	public toggle(): void {
		this.isShow = !this.isShow;
	}
}
