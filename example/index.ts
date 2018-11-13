import h from '../src/vdom/h'
import render from '../src/render'
import { Patch, PatchType } from '../src/patch'
import applyPatch from '../src/applyPatch'
import VNode from '../src/vdom/vnode'

function main() {
  const app = h('h1', { className: 'title' }, [
    h('p', { className: 'hello' }, 'Hello'),
    h('p', { className: 'hello' }, 'World'),
    h(
      'button',
      { className: 'hello', onClick: () => console.info('YO!! Clicked!!') },
      'World'
    )
  ])
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
