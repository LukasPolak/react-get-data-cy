import * as React from 'react'
import { getDataCy } from '../src'

describe('getDataCy', () => {
  it('should get whole text content', () => {
    expect(getDataCy('button', <button />)).toStrictEqual({
      'data-cy': 'button',
    })

    expect(getDataCy('button', <button>Log In</button>)).toStrictEqual({
      'data-cy': 'button_log-in',
    })

    expect(
      getDataCy(
        'button',
        <button>
          <span>Log In</span>
        </button>
      )
    ).toStrictEqual({
      'data-cy': 'button_log-in',
    })

    expect(
      getDataCy(
        'button',
        <button>
          <span>Log</span>
          <span>In</span>
        </button>
      )
    ).toStrictEqual({
      'data-cy': 'button_log-in',
    })

    expect(
      getDataCy(
        'button',
        <button>
          <span> Log</span>
          <span>In </span>
        </button>
      )
    ).toStrictEqual({
      'data-cy': 'button_log-in',
    })
    expect(
      getDataCy('Notification Item', 'Something went wrong. Please try again!')
    ).toStrictEqual({
      'data-cy': 'notification-item_something-went-wrong-please-try-again',
    })
  })
})
