import { Patch, PatchType } from './patch'
import { VNode } from './vdom'

export default function diff(tree: VNode, nextTree: VNode): Patch[] {
  const patches: Patch[] = []
  if (tree === nextTree) {
    return patches
  }
  // TODO: implement diff algorithm here
  const patch = new Patch(PatchType.TEXT, tree, null)
  patches.push(patch)

  return patches
}
