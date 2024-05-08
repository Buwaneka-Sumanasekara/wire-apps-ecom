import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { setupStore } from '../store/configureStore'


const initialStore = {
  cart: {
    items: [],
    totalAmount:0
  },

}

const store = setupStore(initialStore)

const customRender = (children) =>
  render(
    <Provider store={store}>
      {children}
    </Provider>,
  )


// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }