import VString from './vstring'

export default class VNode {
  public readonly tagName: string
  public readonly key?: string
  public attrs: { [s: string]: any }
  public dom?: HTMLElement
  public children: Array<VNode | VString>

  constructor(
    tagName: string,
    attrs?: { [s: string]: any },
    children?: VNode | string | Array<VNode | string>
  ) {
    this.tagName = tagName
    this.attrs = attrs || {}
    this.key = this.attrs.key

    // FIXME: construct children array
    if (children === undefined) {
      this.children = []
      return
    }

    if (!Array.isArray(children)) {
      if (children instanceof VNode) {
        this.children = [children]
      } else if (typeof children === 'string') {
        this.children = [new VString(children)]
      } else {
        this.children = []
      }
      return
    }

    this.children = children.map(child => {
      if (typeof child === 'string') {
        return new VString(child)
      }
      return child
    })
  }
}
