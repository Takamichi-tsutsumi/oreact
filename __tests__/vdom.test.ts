import { h, VNode } from '../src/vdom'

describe('Test h', () => {
  test('simple', () => {
    const node = h('div', {})
    expect(node.tagName).toBe('div')
    expect(node.attrs).toEqual({})
    expect(node.key).toBeUndefined()
    expect(node.children).toBeUndefined()
  })

  test('with attributes', () => {
    const node = h('div', { className: 'container' })
    expect(node.attrs.className).toEqual('container')
  })

  test('with key attr', () => {
    const node = h('div', { key: 'key' })
    expect(node.key).toEqual('key')
  })

  test('with children', () => {
    const node = h(
      'div',
      { className: 'parent' },
      h('a', { href: 'google.com' })
    )
    expect(node.children).toEqual(new VNode('a', { href: 'google.com' }))
  })

  test('with children of array', () => {
    const node = h('div', { className: 'parent' }, [
      h('a', { href: 'google.com' }),
      h('p', {}, 'Hello, world')
    ])

    expect(Array.isArray(node.children)).toBe(true)
    expect((node.children as VNode[]).length).toBe(2)
  })
})
