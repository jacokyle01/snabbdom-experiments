import { VNode, h } from "snabbdom";
import AppCtrl from "./ctrl";

const message = (ctrl: AppCtrl): VNode => {
    return h("div", "Hello world");
}

const view = (ctrl: AppCtrl): VNode => {
    return message(ctrl);
}

export default view; 