import VNode from './vdom/vnode'
import applyProperties from './applyProperties'

// Creating DOM node from Virtual DOM
export default function createElement(vnode: VNode): HTMLElement {
  const dom = document.createElement(vnode.tagName)
  applyProperties(dom, vnode.attrs)
  vnode.dom = dom

  if (typeof vnode.children === 'string') {
    dom.textContent = vnode.children
  } else if (vnode.children instanceof VNode) {
    dom.appendChild(createElement(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach(child => dom.appendChild(createElement(child)))
  }

  return dom
}
