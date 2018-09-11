import { Patch, PatchType } from './patch'
import VString from './vdom/vstring'

// TODO: after applyPatch, need to replace tree to newTree
export default function applyPatch(patch: Patch) {
  if (patch.type === PatchType.TEXT) {
    // TODO: extract check dom rendered function
    if (patch.vnode.dom) {
      patch.vnode.children = [new VString(patch.patch as string)]
      patch.vnode.dom.textContent = patch.patch as string
    }
  }

  if (patch.type === PatchType.REMOVE) {
    if (patch.vnode.dom && patch.vnode.dom.parentNode) {
      patch.vnode.dom.parentNode.removeChild(patch.vnode.dom)
    }
  }
}
