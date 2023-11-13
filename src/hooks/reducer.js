import { reducer_keys } from "../constants/keys";

const object_reducer = (state, payload) => ({
    [reducer_keys.GENERAL]: {
        ...state,
        ...payload,
    },
});

function reducer(state, { type, payload }) {
    if (object_reducer(state)[type]) {
        return (object_reducer(state, payload)[type])
    } else {
        return (state);
    }
};

export { reducer };