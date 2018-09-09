import { h } from './vnode'
import render from './render'

function main() {
  const app = h('div', { className: 'app' }, [
    h('h1', { className: 'page-title' }, 'Title'),
    h('p', { className: 'page-content' }, 'paragraph')
  ])
  const root = document.getElementById('root')
  let treeRoot
  if (root) {
    treeRoot = render(app, root)
  }
  console.info(treeRoot)
}

main()
