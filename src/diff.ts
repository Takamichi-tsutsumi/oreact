import { Patch, PatchType } from './patch'
import VNode from './vdom/vnode'
import VString from './vdom/vstring'
import { isSameObj } from './utils'

export default function diff(tree: VNode, nextTree: VNode): Patch[] {
  const patches: Patch[] = []
  if (tree === nextTree) {
    return patches
  }

  // Diff Props
  if (!isSameObj(tree.attrs, nextTree.attrs)) {
    // TODO: Implement diffProps
  }

  // Diff Children
  // Diff child text length is 1
  if (tree.children.length > 0) {
    if (nextTree.children.length === 0) {
      patches.push(new Patch(PatchType.REMOVE, tree, null))
    } else if (tree.children.length === 1 && nextTree.children.length === 1) {
      const fc = tree.children[0]
      const nfc = nextTree.children[0]
      if (fc instanceof VString && nfc instanceof VString) {
        if (fc.text !== nfc.text) {
          patches.push(new Patch(PatchType.TEXT, tree, nfc.text))
        }
      }
    }
  }

  return patches
}
