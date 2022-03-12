import React from 'react'
import { render, cleanup, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import moxios from 'moxios'
import { store } from '../store'
import Tasks from './Tasks'

describe('Tasks', () => {
  beforeEach(() => {
    cleanup()
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it(
    'should render a list of tasks',
    async () => {
      const tasksMock = [
        { _id: '3129874asdhdg2342', name: 'task 1', done: false },
        { _id: '378129387534fsdkj', name: 'task 2', done: true },
        { _id: '38297sagheryu3984', name: 'task 3', done: false },
      ]

      const { getAllByTestId } = render(
        <Provider store={store}>
          <Router>
            <Tasks />
          </Router>
        </Provider>
      )

      await moxios.wait(jest.fn)
      await act(async () => {
        const req = moxios.requests.mostRecent()

        req.respondWith({
          status: 200,
          response: tasksMock
        })
      })

      expect(getAllByTestId('task')).toHaveLength(tasksMock.length)
    }
  )
})
