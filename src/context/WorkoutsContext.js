import { createContext, useReducer } from "react";

export const workoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  // Define your base URL
const API_BASE_URL = "https://workout-buddys.herokuapp.com/api";
  return (
    <workoutsContext.Provider value={{ ...state, dispatch, API_BASE_URL}}>
      {children}
    </workoutsContext.Provider>
  );
};

export default WorkoutContextProvider;
