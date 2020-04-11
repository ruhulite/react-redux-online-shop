import {createStore, combineReducers} from 'redux';
import cartReducer from '../features/cart/reducer'

const addStateToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state)
    localStorage.setItem('State', serializeState)
  } catch (err) {
    console.log('Error ', err)
  }
}

const getStateFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem('State')
    if(serializeState === null) return undefined
    return JSON.parse(serializeState)
  } catch(err) {
    console.log('Error ', err)
    return undefined
  }
}

const rootReducer = combineReducers({
  cart: cartReducer
});

const persistedCartState = getStateFromLocalStorage()

const store = createStore(
  rootReducer,
  persistedCartState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => addStateToLocalStorage(store.getState()))

export default store;