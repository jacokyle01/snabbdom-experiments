import { Redraw, Mode } from "./interfaces";

export default class AppCtrl {
	count = 0;
	mode: Mode = "Increment";

	constructor(readonly redraw: Redraw) {}

	toggleMode = (): void => {
		this.mode = this.mode === "Increment" ? "Decrement" : "Increment";
		this.redraw();
	};

	handleAdjust = (): void => {
		switch (this.mode) {
			case "Decrement":
				this.count -= 1;
                break;
			case "Increment":
				this.count++;
		}
        this.redraw();
	};
}
