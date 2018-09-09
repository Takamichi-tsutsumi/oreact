import VNode from './vnode'

export default function h(tagName: string, attrs: {}, children?: any): VNode {
  return new VNode(tagName, attrs, children)
}
