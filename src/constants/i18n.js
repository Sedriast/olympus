import { language_keys } from "./keys";

const es = {
    [language_keys.ERRORS]: {
        GRAZING_AREA: "El área es incorrecta,reintente",
        CAPACITY: "Aforo incorrecto, porfavor reintente",
        GRASS_TYPE: "A ocurrido un error en el tipo de pasto",
        OCUPATION_PERIODE: "El periodo de ocupación no puede ser inferior a 1 dia",
        ANIMAL_WEIGHT: "El peso de los ejemplares no puede ser inferior a 10 kilos",
        FORRAGE_CONSUME: "El consumo de forraje no puede ser inferior a 1 kilogramo",
    },
    [language_keys.INITIAL_BANNER]: {
        BUTTON_IB: "INGRESAR",
    },
    [language_keys.PADDOKS_AREA_FORM]: {
        leyends: {
            BUTTON: "SIGUIENTE",
            FORRAGE_VARIETY: "TIPO DE PASTO",
            CAPACITY: "LA PRODUCCIÓN DE PASTO POR METRO CUADRADO ES:",
            GRAZING_AREA: "EL ÁREA EFECTIVA DE PASTOREO EN HECTÁREAS ES:",
        },
        placeholders: {
            CAPACITY: "gr/m2",
            GRASS_VARIETY: "Tipo de pasto",
            GRAZING_AREA: "Área efectiva de pastoreo",
        },
    },
    [language_keys.BOVINE_CARACTERISTICS]: {
        leyends: {
            EMPTY: " ",
            BUTTON_1: "ATRÁS",
            BUTTON_2: "SIGUIENTE",
            PERIODE_: "Periodo de ocupación",
            FORRAGE_CONSUME: "Consumo de forraje",
            OCUPATION_PERIODE: "EL PERIODO DE OCUPACIÓN EN DIAS ES:",
            ANIMAL_WEIGHT: "EL PESO PROMEDIO DE LOS EJEMPLARES, EN KG, ES:",
        },
        placeholders: {
            ANIMAL_WEIGHT: "Peso en kilogramos",
            OCUPATION_PERIODE: "Periodo en dias",
            GRASS_FRESHNESS: "Frescura del pasto",
        },
    },
    [language_keys.REPORT]: {
        leyends: {
            BUTTON_1: "ATRÁS",
            BUTTON_2: "CAPTURAR",
            NUMBER_OF_PADDOKS: "m²",
            REAL_CHARGE: "Ejemplares",
            REAL_PADDOCKS_FORRAGE: "gr/m²",
        },
        titles: {
            PADDOCKS_AREA: "ÁREA DE POTREROS:",
            PADDOCKS_FORRAGE: "PRODUCCIÓN DE PASTO:",
            NUMBER_OF_PADDOKS: "ÁREA DE CADA POTRERO:",
            REAL_CHARGE: "LOS POTREROS PUEDEN MANTENER",
        },
    },
};

export { es }