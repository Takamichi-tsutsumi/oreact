import createElement from './createElement'
import { VNode } from './vnode'

export default function render(vnode: VNode, root: HTMLElement) {
  const elm = createElement(vnode)
  root.appendChild(elm)
}
