import {createStore} from 'redux'

import calculatorReducers from './reducers/calculatorReducers'
const store = createStore(calculatorReducers)

export default  store;