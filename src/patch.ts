import VNode from './vdom/vnode'

export enum PatchType {
  TEXT,
  NODE,
  REMOVE
}

export class Patch {
  public type: PatchType
  public vnode: VNode
  public patch: VNode | string | null

  constructor(type: PatchType, vnode: VNode, patch: VNode | string | null) {
    this.type = type
    this.vnode = vnode
    this.patch = patch
  }
}
