import { VNode, h } from "snabbdom";
import AppCtrl from "./ctrl";

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

const view = (ctrl: AppCtrl): VNode =>
	h("div#buttons", [count(ctrl), switcher(ctrl), adjust(ctrl)]);

export default view;
