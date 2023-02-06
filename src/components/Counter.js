import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/reducers/counterReducer";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const dispatchIncrement = () => {
    // dispatch({ type: "counter/increment" });
    dispatch(counterActions.increment());
  };

  const dispatchDecrement = () => {
    // dispatch({
    //   type: "counter/decrement",
    // });
    dispatch(counterActions.decrement());
  };

  const increaseByValue = (number) => {
    // dispatch({
    //   type: "counter/incrementbyvalue",
    //   payload: {
    //     number: number,
    //   },
    // });
    dispatch(counterActions.incrementbyvalue({number}));
  };

  const toggleCounterHandler = () => {
    dispatch({
      type: "counter/showcounter",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={dispatchIncrement}>Increment</button>
        <button onClick={() => increaseByValue(5)}>Increase by value</button>
        <button onClick={dispatchDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
