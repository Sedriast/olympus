import React from "react";

import { reducer } from "./reducer";
import { es } from "../constants/i18n";
import { language_keys, reducer_keys } from "../constants/keys";

import Error from "../components/Fragments/Error";
import { Img_ } from "../constants/Img_";

export const GeneralContext = React.createContext();

export function GenProvider({ children }) {
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
			{ name: es[language_keys.STATICS].GRASS_TYPES.KIKUYO, timeToSleep: 33 },
			{ name: es[language_keys.STATICS].GRASS_TYPES.RYEGRASS, timeToSleep: 33 },
			{
				name: es[language_keys.STATICS].GRASS_TYPES.RED_CARRETON,
				timeToSleep: 33,
			},
			{
				name: es[language_keys.STATICS].GRASS_TYPES.WHITE_CARRETON,
				timeToSleep: 33,
			},
		],
		grassFreshness_: [
			{
				name: es[language_keys.STATICS].GRASS_FRESHNESS.FRESH,
				timeToSleep: 0.12,
			},
			{
				name: es[language_keys.STATICS].GRASS_FRESHNESS.MEDIUM,
				timeToSleep: 0.13,
			},
			{
				name: es[language_keys.STATICS].GRASS_FRESHNESS.OLD,
				timeToSleep: 0.15,
			},
		],
		errorOff: (error) => (
			<Error
				leyend={error}
				close={() => dispatch({ type: reducer_keys.ERROR_OFF })}
			/>
		),
	};

	const initialBanner = {
		language: es[language_keys.INITIAL_BANNER].BUTTON_IB,
		logos: {
			CREING: Img_.CREING,
			EBATE: Img_.EBATE,
			GIZU: Img_.GIZU,
		},
	};

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
			AREA: Img_.AREA,
			GRASS: Img_.GRASS,
			COW_HEAD: Img_.COWHEAD,
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
				parseFloat(capacity_) > 0
					? dispatch({
							type: reducer_keys.CAPACITY,
							payload: [parseFloat(capacity_)],
					  })
					: dispatch({
							type: reducer_keys.ERROR_CAPACITY,
							payload: [statics.errorOff(es[language_keys.ERRORS].CAPACITY)],
					  }),
			END: () => dispatch({ type: reducer_keys.RESET_SECTIONS }),
		},
	};

	const bovineCaracteristics = {
		error: state.error,
		section: state.sectionsSubProvider,
		grassFreshness_: statics.grassFreshness_,
		languages: es[language_keys.BOVINE_CARACTERISTICS],
		values: {
			animalWeight: state.animalWeight,
			forrageConsum: state.forrageConsum,
			grassFreshness: state.grassFreshness,
		},
		decorations: {
			COW: Img_.COW,
			CART: Img_.CART,
			BALANCE: Img_.BALANCE,
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
							payload: [forrageConsume_, grassFreshness_],
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
			languages: es[language_keys.REPORT_ECUATIONS],
			values: {
				END: () =>
					dispatch({
						type: reducer_keys.RESET_ALL,
						payload: [
							es[language_keys.PADDOKS_AREA_FORM].placeholders.GRASS_VARIETY,
							es[language_keys.BOVINE_CARACTERISTICS].placeholders
								.GRASS_FRESHNESS,
						],
					}),
				realCharge: realCharge.toFixed(),
				animalCharge: animalCharge.toFixed(),
				paddocksArea: paddocksArea.toFixed(),
				paddockForrage: paddockForrage.toFixed(),
				numberOfPaddocks: numberOfPaddocks.toFixed(),
				realPaddockForrage: realPaddockForrage.toFixed(),
			},
		};
	};

	return (
		<GeneralContext.Provider
			value={{
				initialBanner,
				reportEcuations,
				paddocksAreaForm,
				bovineCaracteristics,
				background: Img_.BACKGROUND,
			}}>
			{children}
		</GeneralContext.Provider>
	);
}
