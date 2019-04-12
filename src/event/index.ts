interface IEventType {
  onClick: string
}

export const EventTypes = {
  onClick: 'click',
  onChange: 'change'
}

export function bindEvent(
  target: HTMLElement,
  eventType: keyof IEventType,
  callback: (e: Event) => any
) {
  target.addEventListener(EventTypes[eventType], callback)
}

export function isEventType(key: string): key is keyof IEventType {
  return Object.keys(EventTypes).includes(key)
}
