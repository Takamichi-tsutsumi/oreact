import { VNode } from './vdom'

const createElement = (vnode: VNode): HTMLElement => {
  const node = document.createElement(vnode.tagName)
  if (typeof vnode.children === 'string') {
    node.textContent = vnode.children
  } else if (vnode.children instanceof VNode) {
    node.appendChild(createElement(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach(child => node.appendChild(createElement(child)))
  }

  return node
}

export default createElement
