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
		grassFreshness:
			es[language_keys.BOVINE_CARACTERISTICS].placeholders.GRASS_FRESHNESS,
	});

	const statics = {
		grazingLost: 0.2,
		largeLivestockUnits: 450,
		grassType: [
			{ name: "Kikuyo", timeToSleep: 33 },
			{ name: "Ryegrass", timeToSleep: 33 },
			{ name: "Red carreton", timeToSleep: 33 },
			{ name: "White carreton", timeToSleep: 33 },
		],
		grassFreshness_: [
			{ name: "Medio", timeToSleep: 0.13 },
			{ name: "Viejo", timeToSleep: 0.15 },
			{ name: "Tierno", timeToSleep: 0.12 },
		],
		errorOff: (error) => (
			<Error
				leyend={error}
				close={() => dispatch({ type: reducer_keys.ERROR_OFF })}
			/>
		),
	};

	/* 



	INITIAL_BANNER°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°



	*/

	const initialBanner = {
		language: es[language_keys.INITIAL_BANNER].BUTTON_IB,
		logos: {
			CREING: PNG_?.CREING,
			EBATE: PNG_?.EBATE,
			GIZU: PNG_?.GIZU,
		},
	};

	/*



	PADDOCKS_AREA_FORM°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°



	*/

	const paddocksAreaForm = {
		error: state.error,
		grassTypes: statics.grassType,
		section: state.sectionsSubProvider,
		languages: es[language_keys.PADDOKS_AREA_FORM],
		values: {
			capacity: state.capacity,
			grazingArea: state.grazingArea,
			forrageVR: state.forrageVariety,
		},
		decorations: {
			AREA: SVG_.AREA,
			GRASS: SVG_.GRASS,
			COW_HEAD: SVG_.COWHEAD,
		},
		operations: {
			GRAZING_AREA: (grazingArea_ = 0) => {
				grazingArea_ > 0
					? dispatch({
							type: reducer_keys.GRAZING_AREA,
							payload: [grazingArea_],
					  })
					: dispatch({
							type: reducer_keys.ERROR_GRAZING_AREA,
							payload: [
								statics.errorOff(es[language_keys.ERRORS].GRAZING_AREA),
							],
					  });
			},
			FORRAGE_VARIETY_AND_RESTANT: (
				forrageVariety_ = "",
				forrageRestant_ = 0
			) => {
				forrageVariety_ != "" && forrageRestant_ > 0
					? dispatch({
							type: reducer_keys.GRASS_VARIETY_AND_RESTANT,
							payload: [forrageVariety_, forrageRestant_],
					  })
					: dispatch({
							type: reducer_keys.ERROR_GRASS_VARIETY_AND_RESTANT,
							payload: [statics.errorOff(es[language_keys.ERRORS].GRASS_TYPE)],
					  });
			},
			CAPACITY: (capacity_ = 0) =>
				capacity_ > 0
					? dispatch({ type: reducer_keys.CAPACITY, payload: [capacity_] })
					: dispatch({
							type: reducer_keys.ERROR_CAPACITY,
							payload: [statics.errorOff(es[language_keys.ERRORS].CAPACITY)],
					  }),
			END: () => dispatch({ type: reducer_keys.RESET_SECTIONS }),
		},
	};

	/*



	BOVINE_CARACTERISTICS°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°



	*/
	console.log(state.sectionsSubProvider);
	const bovineCaracteristics = {
		error: state.error,
		section: state.sectionsSubProvider,
		grassFreshness: statics.grassFreshness_,
		languages: es[language_keys.BOVINE_CARACTERISTICS],
		values: {
			animalWeight: state.animalWeight,
			forrageConsum: state.forrageConsum,
			ocupationPeriode: state.occupationPeriode,
		},
		operations: {
			ANIMAL_WEIGHT: (animalWeight_ = 0) => {
				animalWeight_ >= 10
					? dispatch({
							type: reducer_keys.ANIMAL_WEIGHT,
							payload: [animalWeight_],
					  })
					: dispatch({
							type: reducer_keys.ERROR_ANIMAL_WEIGHT,
							payload: [
								statics.errorOff(es[language_keys.ERRORS].ANIMAL_WEIGHT),
							],
					  });
			},
			OCUPATION_PERIODE: (ocupationPeriode_) => {
				ocupationPeriode_ > 0
					? dispatch({
							type: reducer_keys.OCUPATION_PERIOD,
							payload: [ocupationPeriode_],
					  })
					: dispatch({
							type: reducer_keys.ERROR_OCUPATION_PERIOD,
							payload: [
								statics.errorOff(es[language_keys.ERRORS].OCUPATION_PERIODE),
							],
					  });
			},
			FORRAGE_CONSUME: (grassFreshness_ = "", forrageConsume_ = 0) =>
				forrageConsume_ > 0
					? dispatch({
							type: reducer_keys.FORRAGE_CONSUME,
							payload: [grassFreshness_, forrageConsume_],
					  })
					: dispatch({
							type: reducer_keys.ERROR_FORRAGE_CONSUME,
							payload: [
								statics.errorOff(es[language_keys.ERRORS].FORRAGE_CONSUME),
							],
					  }),
			END: () => dispatch({ type: reducer_keys.RESET_SECTIONS }),
		},
	};

	/*



	REPORT_ECUATIONS°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°



	*/

	const reportEcuations = () => {
		let paddockForrage = (paddocksArea * state.capacity) / 1000;
		let numberOfPaddocks = state.forrageRestant / state.occupationPeriode + 1;
		let realPaddockForrage =
			paddockForrage - paddockForrage * statics.grazingLost;
		let realCharge =
			(animalCharge * state.animalWeight) / statics.largeLivestockUnits;
		let paddocksArea =
			(state.grazingArea * 10000) / parseFloat(numberOfPaddocks).toFixed();
		let animalCharge =
			realPaddockForrage /
			(state.occupationPeriode * (state.animalWeight * state.forrageConsum));

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
				bovineCaracteristics,
				background: PNG_.BACKGROUND,
			}}>
			{children}
		</GeneralContext.Provider>
	);
}
