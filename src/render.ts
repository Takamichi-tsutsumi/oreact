import createElement from './createElement'
import VNode from './vdom/vnode'

export default function render(vnode: VNode, root: HTMLElement) {
  const elm = createElement(vnode)
  root.appendChild(elm)
  return elm
}
