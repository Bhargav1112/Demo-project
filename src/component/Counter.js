import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/slices/counter-slice";

function Counter(props) {
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count.counter);
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };
    const incrementByNumberHandler = () => {
        dispatch(counterActions.incrementByNumber(number));
    };
    const inputChangeHandler = (e) => {
        setNumber(+e.target.value);
    };
    return (
        <>
            <p>{counter}</p>
            <input type="text" onChange={inputChangeHandler} />
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
            <button onClick={incrementByNumberHandler}>+{number}</button>
        </>
    );
}

export default Counter;
