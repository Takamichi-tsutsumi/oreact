import { bindEvent, isEventType } from './event/index'

export default function applyProperties(
  node: HTMLElement,
  props: { [s: string]: any }
) {
  Object.keys(props).map(k => {
    if (k === 'className') {
      node.setAttribute('class', props[k])
    } else if (isEventType(k)) {
      bindEvent(node, k, props[k])
      node.setAttribute(k, props[k])
    }
  })
}
