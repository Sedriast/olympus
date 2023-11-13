import React from "react";

import { reducer } from "./reducer";
import { es } from "../constants/i18n";
import { language_keys, reducer_keys } from "../constants/keys";

import Error from "../components/Fragments/Error";
import { Img_ } from "../constants/Img_";

export const GeneralContext = React.createContext();
const { PNG_, SVG_ } = Img_;

export default function GenProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, {
		capacity: 1,
		error: <></>,
		animalWeight: 1,
		forrageConsum: 1,
		grazingArea: 0.1,
		forrageRestant: 1,
		occupationPeriode: 1,
		sectionsSubProvider: [false, false, false],
		forrageVariety:
			es[language_keys.PADDOKS_AREA_FORM].placeholders.GRASS_VARIETY,
	});
	const errorOff = () => {
		dispatch({
			type: reducer_keys.GENERAL,
			payload: { error: <></>, grazingArea: 1 },
		});
	};

	const statics = {
		grazingLost: 0.2,
		largeLivestockUnits: 450,
		cError: (error) => <Error leyend={error} close={errorOff} />,
	};

	const initialBanner = {
		logos: PNG_,
		language: es[language_keys.INITIAL_BANNER].BUTTON_IB,
	};

	const paddocksAreaForm = {
		error: state.error,
		section: state.sectionsSubProvider,
		languages: es[language_keys.PADDOKS_AREA_FORM],
		values: {
			forrageVR: state.forrageVariety,
			capacity: state.capacity,
			grazingArea: state.grazingArea,
		},
		grassTypes: [
			{ name: "kikuyo", timeToSleep: 33 },
			{ name: "ryegrass", timeToSleep: 33 },
			{ name: "red carreton", timeToSleep: 33 },
			{ name: "white carreton", timeToSleep: 33 },
		],
		decorations: {
			COW: SVG_.COW,
			AREA: SVG_.AREA,
			GRASS: SVG_.GRASS,
			BACKGROUND: PNG_.BACKGROUND,
		},
		operations: {
			GRAZING_AREA: (grazingArea_ = 0) => {
				grazingArea_ > 0
					? dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								grazingArea: grazingArea_,
								sectionsSubProvider: [true, false, false],
							},
					  })
					: dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								grazingArea: 1,
								error: statics.cError(es[language_keys.ERRORS].GRAZING_AREA),
								sectionsSubProvider: [false, false, false],
							},
					  });
			},
			FORRAGE_VARIETY_AND_RESTANT: (
				forrageVariety_ = "",
				forrageRestant_ = 0
			) => {
				forrageVariety_ != "" && forrageRestant_ > 0
					? dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								forrageRestant: forrageRestant_,
								forrageVariety: forrageVariety_,
								sectionsSubProvider: [true, true, false],
							},
					  })
					: dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								forrageRestant: 1,
								forrageVariety:
									es[language_keys.PADDOKS_AREA_FORM].placeholders
										.GRASS_VARIETY,
								error: statics.cError(es[language_keys.ERRORS].GRASS_TYPE),
								sectionsSubProvider: [true, false, false],
							},
					  });
			},
			CAPACITY: (capacity = 0) =>
				capacity > 0
					? dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								capacity: capacity,
								sectionsSubProvider: [true, true, true],
							},
					  })
					: dispatch({
							type: reducer_keys.GENERAL,
							payload: {
								capacity: 1,
								error: statics.cError(es[language_keys.ERRORS].CAPACITY),
								sectionsSubProvider: [true, true, false],
							},
					  }),
		},
	};

	const reportEcuations = () => {
		let numberOfPaddocks = state.forrageRestant / state.occupationPeriode + 1;
		let paddocksArea =
			(state.grazingArea * 10000) / parseFloat(numberOfPaddocks).toFixed();
		let paddockForrage = (paddocksArea * state.capacity) / 1000;
		let realPaddockForrage =
			paddockForrage - paddockForrage * statics.grazingLost;
		let animalCharge =
			realPaddockForrage /
			(state.occupationPeriode * (state.animalWeight * state.forrageConsum));
		let realCharge =
			(animalCharge * state.animalWeight) / statics.largeLivestockUnits;

		return {
			realCharge: realCharge,
			animalCharge: animalCharge,
			paddocksArea: paddocksArea,
			paddockForrage: paddockForrage,
			numberOfPaddocks: numberOfPaddocks,
			realPaddockForrage: realPaddockForrage,
		};
	};

	return (
		<GeneralContext.Provider
			value={{
				initialBanner,
				reportEcuations,
				paddocksAreaForm,
			}}>
			{children}
		</GeneralContext.Provider>
	);
}
