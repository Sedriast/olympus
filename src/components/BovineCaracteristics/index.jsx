import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { useState } from "react";

import ModalV from "../0_general/1_modal/ModalV";
import SingleButton from "../0_general/1_buttons/SingleButton";
import Inputs from "../0_general/1_input/Inputs";

import backimg from "../../../assets/back.png";
import balan from "../../../assets/deco/balan.png";
import cuva from "../../../assets/deco/cuva.png";
import fardo from "../../../assets/deco/fardo.png";

import DropDownList from "../0_general/1_dropDownList/DropDownList";

export default function BovineCaracteristics({
	nav,
	weigth_,
	forrageConsum_,
	occupationPeriot_,
}) {
	const list = [
		{
			key: "Tierno",
			sleep: 0.12,
		},
		{
			key: "Medio",
			sleep: 0.13,
		},
		{
			key: "Viejo",
			sleep: 0.15,
		},
	];
	const [sectionTwo, setSecTwo] = useState(false);
	const [sectionThree, setSecThree] = useState(false);
	const [sectionFour, setSecFour] = useState(false);

	//control error events
	const [er1, setER1] = useState(false);
	const [er2, setER2] = useState(false);

	//Memory of shippable data
	const [pWeight, setWeigth] = useState(0);
	const [forrageConsum, setFC_] = useState(0);
	const [occupationPeriot, setOP_] = useState(0);
	//******************************************************************************************************************* */
	function promWeight(e) {
		if (e > 1) {
			setWeigth(e);
			setSecTwo(true);
		} else {
			setER1(true);
			setSecTwo(false);
			setSecThree(false);
			setSecFour(false);
		}
	}
	function occupationPeriotFunc(e) {
		if (e > 1) {
			setOP_(e);
			setSecThree(true);
		} else {
			setER1(true);
			setSecThree(false);
			setSecFour(false);
		}
	}
	function forrageConsumFunc(e) {
		if (e > 0) {
			setFC_(e);
			setSecFour(true);
		} else {
			setER2(true);
			setSecFour(false);
		}
	}
	function sendData() {
		if (pWeight > 0 && forrageConsum > 0 && occupationPeriot > 0) {
			weigth_(pWeight);
			forrageConsum_(forrageConsum);
			occupationPeriot_(occupationPeriot);

			nav.navigate("report");
		} else {
			setER2(true);
		}
	}
	//******************************************************************************************************************* */
	return (
		<ImageBackground source={backimg} resizeMode="cover" style={st.container}>
			<View style={st.back}>
				<SingleButton tile="ATRÁS" press={() => nav.navigate("first")} />
			</View>
			{/* _______________________________________________________________SECTION ONE________________________ */}
			<View>
				<Inputs
					placeholder={placeholders.p1}
					leyend={texts.tT1}
					type="numeric"
					keyType="numeric"
					endEd={(e) => {
						promWeight(parseFloat(e.nativeEvent.text));
					}}
				/>
			</View>
			<Image style={st.bal} source={balan} />
			{/* _______________________________________________________________SECTION TWO_________________________ */}
			{sectionTwo ? (
				<>
					<View>
						<View style={st.sepa1} />
						<View style={st.sepa2} />

						<Inputs
							placeholder={placeholders.p2}
							leyend={texts.tT2}
							type="numeric"
							keyType="numeric"
							endEd={(e) => {
								occupationPeriotFunc(parseFloat(e.nativeEvent.text));
							}}
						/>
					</View>

					<Image style={st.cuva} source={cuva} />
				</>
			) : (
				<View></View>
			)}
			{/* _______________________________________________________________SECTION THREE_________________________ */}
			{sectionThree ? (
				<>
					<View>
						<View style={st.sepa1} />
						<View style={st.sepa2} />

						<DropDownList
							initLayer="CALIDAD DEL PASTO"
							list={list}
							press={forrageConsumFunc}
						/>
					</View>

					<Image style={st.fardo} source={fardo} />
				</>
			) : (
				<View></View>
			)}
			{/* _______________________________________________________________SECTION FOUR_________________________ */}
			{sectionFour ? (
				<View>
					<View style={st.sepa1} />
					<View style={st.sepa2} />

					<SingleButton tile="CREAR" press={sendData} />
				</View>
			) : (
				<View></View>
			)}
			{/* _______________________________________________________________ERRORS SECTION______________________ */}
			<ModalV msj={errors.e1} visi={er1} setVisi={setER1} />
			<ModalV msj={errors.e2} visi={er2} setVisi={setER2} />
		</ImageBackground>
	);
}
const texts = {
	t1: " ",
	t2: "Periodo de ocupación",
	tT1: "EL PESO PROMEDIO DE LOS EJEMPLARES, EN KG, ES:",
	tT2: "EL PERIODO DE OCUPACIÓN EN DIAS ES:",
};
const placeholders = {
	p1: "Peso en kilogramos",
	p2: "Periodo en dias",
};
const errors = {
	e1: "El peso de los ejemplares no puede ser inferior a 10 kilos",
	e2: "Ha ocurrido un error inesperado, por favor verifique los datos  ",
};
const st = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "#fff",
	},
	tx: {
		textAlign: "center",
		fontSize: 25,
		marginLeft: 10,
		marginBottom: 40,
	},
	sepa1: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "#000",
	},
	sepa2: {
		height: 50,
		borderTopWidth: 2,
		borderTopColor: "#000",
	},
	r: {
		width: 350,
		backgroundColor: "#fff",
	},
	e: {
		width: 350,
		marginBottom: 10,
	},
	d: {
		width: 350,
		marginBottom: 2,
	},
	back: {
		position: "absolute",

		top: 50,
		left: 20,

		height: 40,
	},
	bal: {
		width: 200,
		height: 200,

		position: "absolute",

		right: -80,
		top: 150,

		zIndex: 0,
	},
	cuva: {
		position: "absolute",

		width: 200,
		height: 200,

		bottom: -35,
		left: 10,
	},
	fardo: {
		position: "absolute",

		width: 175,
		height: 175,

		bottom: -15,
		right: -20,
	},
});
