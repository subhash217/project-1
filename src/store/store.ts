import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { countReducer, usersReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const enhance = compose(applyMiddleware(thunk), composeWithDevTools());
const rootReducer = combineReducers({
  count: countReducer,
  users: usersReducer,
});
export const store = createStore(rootReducer, enhance);
