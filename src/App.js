import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/reducers/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <input onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Tambahkan
      </button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
