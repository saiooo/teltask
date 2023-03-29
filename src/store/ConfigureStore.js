import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import UsersReducer from "./../reducers/users.reducers";
import CatsReducer from "./../reducers/categories.reducers";

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      users: UsersReducer,
      categories: CatsReducer,
    }),
    composeWithDevTools()
  );

  return store;
};

export default ConfigureStore;
