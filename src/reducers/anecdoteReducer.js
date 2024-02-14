import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload;
      const anecdote = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      };
      const newState = state.map((a) => (a.id !== id ? a : changedAnecdote));
      return newState.sort(compareByVotes);
    },
    addAnecdote(state, action) {
      state.push(asObject(action.payload));
      return state.sort(compareByVotes);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

const compareByVotes = (a, b) => {
  return b.votes - a.votes;
};

export const initialiseAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const {
  addVote,
  addAnecdote,
  returnAnecdote,
  appendAnecdote,
  setAnecdotes,
} = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
