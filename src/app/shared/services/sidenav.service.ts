import { Injectable } from "@angular/core";

@Injectable()
export class SidenavService {
	public isShow!: boolean;
	public editCarousel!: boolean;

	// public setSidenav(sidenav: any) {
	// 	this.sidenav = sidenav;
	// }

	public open() {
		return (this.isShow = true);
	}

	public openCarouselEdit() {
		return (this.editCarousel = true);
	}

	public close() {
		return (this.isShow = false);
	}

	public closeAll() {
		this.isShow = false;
		this.editCarousel = false;
	}

	public toggle(): void {
		this.isShow = !this.isShow;
	}
}
