import React from "react";

import { reducer } from "./reducer";
import { es } from "../constants/i18n";
import { icon_keys, language_keys, reducer_keys } from "../constants/keys";

import Error from "../components/Fragments/Error";
import Icon, { Img_ } from "../constants/Icons";

export const GeneralContext = React.createContext();

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
	});

	const statics = {
		grazingLost: 0.2,
		largeLivestockUnits: 450,
	};

	const initialBanner = {
		logos: Img_,
		languge: es[language_keys.LEYENDS].BUTTON_IB,
	};
	const paddocksAreaForm = {
		error: state.error,
		section: state.sectionsSubProvider,
		grassTypes: [
			{ name: "kikuyo", timeToSleep: 33 },
			{ name: "ryegrass", timeToSleep: 33 },
			{ name: "red carreton", timeToSleep: 33 },
			{ name: "white carreton", timeToSleep: 33 },
		],
		decorations: {
			cow: Icon[icon_keys.COW],
			area: Icon[icon_keys.AREA],
			background: Img_.background,
			grass: Icon[icon_keys.GRASS],
		},
		operations: {
			GRAZING_AREA: (grazingArea_ = 0.1) => {
				grazingArea > 0
					? dispatch({
							type: reducer_keys.GRAZING_AREA,
							payload: {
								grazingArea: grazingArea_,
								sectionsSubProvider: [true, false, false],
							},
					  })
					: dispatch({
							type: reducer_keys.ERROR,
							payload: <Error leyend={es.ERRORS.GRAZING_AREA} />,
					  });
			},
			FORRAGE_VARIETY_AND_RESTANT: (forrageVariety = 1) =>
				dispatch({
					type: reducer_keys.GRASS_VARIETY_AND_RESTANT,
					payload: forrageVariety,
				}),
			CAPACITY: (capacity = 1) =>
				dispatch({
					type: reducer_keys.CAPACITY,
					payload: capacity,
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
