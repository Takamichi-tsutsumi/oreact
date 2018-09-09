import { Patch, PatchType } from './patch'
import VString from './vdom/vstring'

export default function applyPatch(patch: Patch) {
  if (patch.type === PatchType.TEXT) {
    // TODO: extract check dom rendered function
    if (patch.vnode.dom) {
      patch.vnode.children = [new VString(patch.patch as string)]
      patch.vnode.dom.textContent = patch.patch as string
    }
  }

  if (patch.type === PatchType.REMOVE) {
    // TODO: implement remove
  }
}
