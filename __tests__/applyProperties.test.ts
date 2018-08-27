import applyProperties from '../src/applyProperties'

describe('applyProperties', () => {
  test('simple case', () => {
    const node = document.createElement('div')
    const props = { id: 'root' }
    applyProperties(node, props)
    expect(node.hasAttribute('id')).toBe(true)
    expect(node.getAttribute('id')).toBe('root')
  })

  test('className', () => {
    const node = document.createElement('div')
    const props = { className: 'container' }
    applyProperties(node, props)
    expect(node.hasAttribute('class')).toBe(true)
    expect(node.getAttribute('class')).toBe('container')
  })
})
