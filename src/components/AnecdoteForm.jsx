import { useDispatch } from "react-redux";
import { addAnecdote, appendAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  resetNotification,
} from "../reducers/notificationReducer";
import anecdotesService from "../services/anecdotesService";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    const newAnecdote = await anecdotesService.createAnecdote(content);
    dispatch(appendAnecdote(newAnecdote));
    // dispatch(addAnecdote(content));
    dispatch(setNotification(`Added anecdote "${content}"`));
    setTimeout(() => {
      dispatch(resetNotification());
    }, 5000);
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
