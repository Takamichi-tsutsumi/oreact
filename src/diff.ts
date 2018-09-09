import { Patch, PatchType } from './patch'
import VNode from './vdom/vnode'
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
  if (
    typeof tree.children === 'string' &&
    typeof nextTree.children === 'string'
  ) {
    if (tree.children !== nextTree.children) {
      patches.push(new Patch(PatchType.TEXT, tree, nextTree.children))
    }
  }

  if (!!tree.children && !nextTree.children) {
    patches.push(new Patch(PatchType.REMOVE, tree, null))
  }

  return patches
}
