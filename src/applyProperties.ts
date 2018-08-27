export const applyProperties = (
  node: HTMLElement,
  props: { [s: string]: any }
) => {
  Object.keys(props).map(k => {
    if (k === 'className') {
      node.setAttribute('class', props[k])
    } else {
      node.setAttribute(k, props[k])
    }
  })
}
