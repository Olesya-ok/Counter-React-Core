import "./Counter.css";

const Counter = ({ counter, onIncrement, onDecrement, onReset }) => {
    return (
        <div className="counter-container">
            <h1>Counter: {counter}</h1>
            <div className="counter-buttons">
                <button onClick={onIncrement}>+1</button>
                <button onClick={onDecrement}>-1</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
