import VNode from './vdom/vnode'
import VString from './vdom/vstring'
import applyProperties from './applyProperties'

// Creating DOM node from Virtual DOM
export default function createElement(vnode: VNode): HTMLElement {
  const dom = document.createElement(vnode.tagName)
  applyProperties(dom, vnode.attrs)
  vnode.dom = dom

  vnode.children.forEach(child => {
    if (child instanceof VString) {
      dom.textContent = child.text
    } else if (child instanceof VNode) {
      dom.appendChild(createElement(child))
    }
  })
  return dom
}
