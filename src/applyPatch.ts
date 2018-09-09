import { Patch, PatchType } from './patch'

export default function applyPatch(patch: Patch) {
  if (patch.type === PatchType.TEXT) {
    // TODO: extract check dom rendered function
    if (patch.vnode.dom) {
      patch.vnode.children = patch.patch as string
      patch.vnode.dom.textContent = patch.patch as string
    }
  }

  if (patch.type === PatchType.REMOVE) {
    // TODO: implement remove
  }
}
