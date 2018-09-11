import h from './vdom/h'
import render from './render'
import { Patch, PatchType } from './patch'
import applyPatch from './applyPatch'
import VNode from './vdom/vnode'

function main() {
  const app = h(
    'h1',
    { className: 'title' },
    h('p', { className: 'hello' }, 'World')
  )
  const root = document.getElementById('root')
  if (root) {
    render(app, root)
  }

  ;(window as any).removehild = () => {
    const patch = new Patch(PatchType.REMOVE, app, null)
    applyPatch(patch)
    console.info(app)
  }
  ;(window as any).changeText = (text: string) => {
    const child = app.children[0]
    if (child instanceof VNode) {
      const patch = new Patch(PatchType.TEXT, child, text)
      applyPatch(patch)
      console.info(app)
    }
  }
}

main()
