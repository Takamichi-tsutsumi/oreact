import { h } from './vdom'
import render from './render'

function main() {
  const app = h('div', { className: 'app' }, [
    h('h1', { className: 'page-title' }, 'Title'),
    h('p', { className: 'page-content' }, 'paragraph')
  ])
  const root = document.getElementById('root')
  if (root) {
    render(app, root)
  }
}

main()
