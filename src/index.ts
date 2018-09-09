import { h } from './vnode'
import render from './render'
import { Patch, PatchType } from './patch'
import applyPatch from './applyPatch'

function main() {
  const app = h('h1', { className: 'title' }, 'Hello')
  const root = document.getElementById('root')
  if (root) {
    render(app, root)
  }

  ;(window as any).changeText = (text: string) => {
    const patch = new Patch(PatchType.TEXT, app, text)
    applyPatch(patch)
    console.info(app)
  }
}

main()
