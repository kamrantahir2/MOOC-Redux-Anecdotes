import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import anecdoteReducer, { setAnecdotes } from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notificationReducer";
import anecdotesService from "./services/anecdotesService";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});

anecdotesService.getAll().then((anecdotes) => {
  store.dispatch(setAnecdotes(anecdotes));
});

store.subscribe(() => console.log(store.getState()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
export default store;
