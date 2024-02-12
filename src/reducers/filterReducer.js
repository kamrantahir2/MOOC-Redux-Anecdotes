const filterReducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER":
      return state.filter((e) => {
        return e.contains(action.payload);
      });
    default:
      return state;
  }
};

export const filterChange = (filter) => {
  return {
    type: "FILTER",
    payload: filter,
  };
};

export default filterReducer;
