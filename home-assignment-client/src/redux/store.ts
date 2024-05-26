import { combineReducers, configureStore } from "@reduxjs/toolkit"
import itemState from "./ItemsState";



//const store = configureStore({ reducer:{itemsState: itemState.reducer} })
const store = configureStore({ reducer:{itemsState: itemState} })

export default store;