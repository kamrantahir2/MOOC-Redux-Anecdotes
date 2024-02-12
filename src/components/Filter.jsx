import filterReducer from "../reducers/filterReducer";
import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const handleChange = (event) => {};

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter: <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
