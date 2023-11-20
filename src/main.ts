import { init, h } from 'snabbdom'
import AppCtrl from './ctrl'
import view from './view';

const patch = init([]);
const ctrl = new AppCtrl(redraw);
const element = document.getElementById("main");
element.innerHTML = "";
const inner = document.createElement("div");
element.appendChild(inner);
let vnode = patch(inner, view(ctrl));

function redraw() {
    vnode = patch(vnode, view(ctrl));
}
