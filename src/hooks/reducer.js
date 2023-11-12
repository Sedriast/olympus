import { reducer_keys } from "../constants/keys";

const object_reducer = (state, payload) => ({
    [reducer_keys.ERROR]: {
        ...state,
        error: payload,
    },
    [reducer_keys.GRAZING_AREA]: {
        ...state,
        ...payload,
    },
    [reducer_keys.GRASS_VARIETY_AND_RESTANT]: {
        ...state,
        ...payload,
    },
    [reducer_keys.CAPACITY]: {
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