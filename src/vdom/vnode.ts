export default class VNode {
  public readonly tagName: string
  public readonly key?: string
  public attrs: { [s: string]: any }
  public dom?: HTMLElement
  public children?: VNode | VNode[] | string

  constructor(tagName: string, attrs?: { [s: string]: any }, children?: any) {
    this.tagName = tagName
    this.attrs = attrs || {}
    this.children = children
    this.key = this.attrs.key
  }
}
