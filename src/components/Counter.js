import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../redux/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state) => state.counter);
    const handleIncrease = () => {
        dispatch(increaseCounter("ok"));
    };

    return (
        <div className="counter-container">
            <button onClick={() => handleIncrease()}>+</button>
            <h1>{counter}</h1>
            <button>-</button>
        </div>
    );
};

export default Counter;
