import './App.css';
import store from "./store";
import Counter from "./components/Counter";

function App() {
    const state = store.getState();

    function incrementHandler (){
        store.dispatch({type: "INCREMENT"});
    }

    function decrementHandler (){
        store.dispatch({type: "DECREMENT"});
    }

    function resetHandler (){
        store.dispatch({type: "RESET"});
    }

    return (
        <div className="App">
            <Counter
                counter={state.counter}
                onIncrement={incrementHandler}
                onDecrement={decrementHandler}
                onReset={resetHandler}
            />
        </div>
    );
}

export default App;


