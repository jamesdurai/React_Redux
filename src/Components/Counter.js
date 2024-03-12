import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter)
  return <div>
    <p>Count: {count}</p>
    <button onClick={() => dispatch (increment())}>Increment</button>
    <button onClick={() => dispatch (decrement())}>Decrement</button>
  </div>;
}; 

export default Counter;

