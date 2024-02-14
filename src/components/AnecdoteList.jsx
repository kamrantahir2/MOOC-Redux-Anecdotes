import { useSelector, useDispatch } from "react-redux";
import { addVote, returnAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  resetNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((e) => {
      return e.content.toLowerCase().includes(state.filter);
    })
  );
  const dispatch = useDispatch();

  const findAnecdote = (id) => {
    return anecdotes.find((a) => a.id === id);
  };

  const vote = (id) => {
    dispatch(addVote(id));
    const foundAnecdote = findAnecdote(id);
    dispatch(setNotification(`Vote added to "${foundAnecdote.content}"`, 5));
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
