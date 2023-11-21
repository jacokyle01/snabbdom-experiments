import { VNode, h } from "snabbdom";
import AppCtrl from "./ctrl";
import { Clock } from "./clock";

const clock = new Clock();

const count = (ctrl: AppCtrl): VNode => {
	return h("div#count", "count: " + ctrl.count);
};

const switcher = (ctrl: AppCtrl): VNode => {
	return h(
		"div#switch",
		{ on: { click: () => ctrl.toggleMode() } },
		"Switch mode"
	);
};

const adjust = (ctrl: AppCtrl): VNode => {
	return h(
		"div#adjust",
		{ on: { click: () => ctrl.handleAdjust() } },
		ctrl.mode
	);
};

const getTime = (clock: Clock) => {
	return h(
		"div#clock",
		{ on: { click: () => alert(clock.seconds()) } },
		"get time"
	);
};

const view = (ctrl: AppCtrl): VNode =>
	h("div#buttons", [count(ctrl), switcher(ctrl), adjust(ctrl), getTime(clock)]);

export default view;
