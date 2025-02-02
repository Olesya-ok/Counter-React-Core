import counterReducer from "./counterReducer";

let store = {
    state: {
        counter: 0,
    },

    subscribers: [],

    getState() {
        return this.state;
    },

    dispatch(action) {
        this.state.counter = counterReducer(this.state.counter, action);
        this.notify();
    },

    subscribe(callback) {
        this.subscribers.push(callback);
    },

    notify() {
        this.subscribers.forEach(callback => callback());
    }
};

export default store;
