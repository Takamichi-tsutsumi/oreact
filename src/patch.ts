import { VNode } from './vdom'

export enum PatchType {
  TEXT,
  NODE,
  REMOVE
}

export class Patch {
  public type: PatchType
  public node: VNode
  public patch: VNode | null

  constructor(type: PatchType, node: VNode, patch: VNode | null) {
    this.type = type
    this.node = node
    this.patch = patch
  }
}
