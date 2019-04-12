import h from '../src/vdom/h'
import render from '../src/render'
// import { Patch, PatchType } from '../src/patch'
import applyPatch from '../src/applyPatch'
import diff from '../src/diff'
import VNode from '../src/vdom/vnode'

class App {
  public state: any
  public tree: VNode | undefined
  public rootDOM: HTMLElement

  constructor(rootDOM: HTMLElement) {
    this.state = { count: 0, text: '' }
    this.rootDOM = rootDOM
  }

  public setState = (newState: any) => {
    if (this.state !== newState) {
      this.state = { ...this.state, ...newState }
      this.render()
    }
  }

  public render = () => {
    const state = this.state
    const newTree = h('div', { className: 'container' }, [
      h('h1', { className: 'title' }, 'COUNTER'),
      h('p', { className: 'hello' }, `${state.count}`),
      h(
        'button',
        {
          className: 'count',
          onClick: () => this.setState({ count: this.state.count + 1 })
        },
        'increment'
      ),
      h(
        'button',
        {
          className: 'count',
          onClick: () => this.setState({ count: this.state.count - 1 })
        },
        'decrement'
      ),
      h('input', {
        className: 'input',
        onChange: (e: any) => this.setState({ text: e.target.value })
      }),
      h('p', { className: 'text' }, state.text)
    ])

    if (!this.tree) {
      this.tree = newTree
      render(newTree, this.rootDOM)
    } else {
      const patches = diff(this.tree, newTree)
      patches.forEach(patch => {
        applyPatch(patch)
      })
    }
  }

  // public update = () => {}
}

function main() {
  const root = document.getElementById('root')
  if (root) {
    const app = new App(root)
    app.render()
  }
}

main()
