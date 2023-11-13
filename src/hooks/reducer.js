import { reducer_keys } from "../constants/keys";

const object_reducer = (state = {}, payload = []) => ({
    [reducer_keys.ERROR_OFF]: {
        ...state,
        error: <></>,
    },
    [reducer_keys.RESET_SECTIONS]: {
        ...state,
        sectionsSubProvider: [false, false, false],
    },
    [reducer_keys.GRAZING_AREA]: {
        ...state,
        grazingArea: payload[0],
        sectionsSubProvider: [true, false, false],
    },
    [reducer_keys.ERROR_GRAZING_AREA]: {
        ...state,
        grazingArea: 1,
        error: payload[0],
        sectionsSubProvider: [false, false, false],
    },
    [reducer_keys.GRASS_VARIETY_AND_RESTANT]: {
        ...state,
        forrageVariety: payload[0],
        forrageRestant: payload[1],
        sectionsSubProvider: [true, true, false],
    },
    [reducer_keys.ERROR_GRASS_VARIETY_AND_RESTANT]: {
        ...state,
        error: payload[0],
        forrageRestant: 1,
        sectionsSubProvider: [true, false, false],
    },
    [reducer_keys.CAPACITY]: {
        ...state,
        capacity: payload[0],
        sectionsSubProvider: [true, true, true],
    },
    [reducer_keys.ERROR_CAPACITY]: {
        ...state,
        capacity: 1,
        error: payload[0],
        sectionsSubProvider: [true, true, false],
    },
    [reducer_keys.ANIMAL_WEIGHT]: {
        ...state,
        animalWeight: payload[0],
        sectionsSubProvider: [true, false, false],
    },
    [reducer_keys.ERROR_ANIMAL_WEIGHT]: {
        ...state,
        animalWeight: 1,
        error: payload[0],
        sectionsSubProvider: [false, false, false],
    },
    [reducer_keys.OCUPATION_PERIOD]: {
        ...state,
        ocupationPeriod: payload[0],
        sectionsSubProvider: [true, true, false],
    },
    [reducer_keys.ERROR_OCUPATION_PERIOD]: {
        ...state,
        error: payload[0],
        ocupationPeriod: 1,
        sectionsSubProvider: [true, false, false],
    },
    [reducer_keys.FORRAGE_CONSUME]: {
        ...state,
        forrageConsume: payload[0],
        grassFreshness: payload[1],
        sectionsSubProvider: [true, true, true],
    },
    [reducer_keys.ERROR_FORRAGE_CONSUME]: {
        ...state,
        error: payload[0],
        forrageConsume: 1,
        sectionsSubProvider: [true, true, false],
    },
});

function reducer(state = {}, { type = "", payload = [] }) {
    if (object_reducer(state)[type]) {
        return (object_reducer(state, payload)[type])
    } else {
        return (state);
    }
};

export { reducer };