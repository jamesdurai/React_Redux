import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + action.value };
      case "DECREASE":
        return { count: state.count - action.value };
      default:
        return { count: state.count };
    }
  };

  let [myState, myDispatch] = useReducer(reducer, { count: 1 });

  return (
    <div>
      <h1>useReducer</h1>
      <button
        className="btn btn-primary"
        onClick={() => myDispatch({ type: "INCREASE", value: 5 })}
      >
        {" "}
        +{" "}
      </button>
      <h1>{myState.count}</h1>
      <button
        className="btn btn-danger"
        onClick={() => myDispatch({ type: "DECREASE", value: 2 })}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default UseReducer;
