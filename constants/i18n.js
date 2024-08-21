import { language_keys } from "./keys";

const es = {
    [language_keys.STATICS]: {
        GRASS_TYPES: {
            KIKUYO: "Kikuyo",
            RYEGRASS: "Ryegrass",
            RED_CARRETON: "Carreton rojo",
            WHITE_CARRETON: "Carreton blanco",
        },
        GRASS_FRESHNESS: {
            OLD: "Viejo",
            FRESH: "Tierno",
            MEDIUM: "Medio",
        },
    },
    [language_keys.ERRORS]: {
        GRAZING_AREA: "El área es incorrecta, reintente",
        CAPACITY: "Aforo incorrecto, por favor reintente",
        GRASS_TYPE: "Ha ocurrido un error en el tipo de pasto",
        OCUPATION_PERIODE: "El periodo de ocupación no puede ser inferior a 1 día",
        ANIMAL_WEIGHT: "El peso de los ejemplares no puede ser inferior a 10 kilos",
        FORRAGE_CONSUME: "El consumo de forraje no puede ser inferior a 1 kilogramo",
    },
    [language_keys.INITIAL_BANNER]: {
        BUTTON_IB: "Ingresar",
    },
    [language_keys.PADDOKS_AREA_FORM]: {
        leyends: {
            BUTTON: "Siguiente",
            FORRAGE_VARIETY: "Tipo de pasto",
            CAPACITY: "La producción de pasto por metro cuadrado es:",
            GRAZING_AREA: "El área efectiva de pastoreo en hectáreas es:",
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
            BUTTON_1: "Atrás",
            BUTTON_2: "Siguiente",
            PERIODE_: "Periodo de ocupación",
            GRASS_FRESHNESS: "Frescura del pasto",
            OCUPATION_PERIODE: "El periodo de ocupación en días es:",
            ANIMAL_WEIGHT: "El peso promedio de los ejemplares, en kg, es:",
        },
        placeholders: {
            ANIMAL_WEIGHT: "Peso en kilogramos",
            OCUPATION_PERIODE: "Periodo en días",
            GRASS_FRESHNESS: "Frescura del pasto",
        },
    },
    [language_keys.REPORT_ECUATIONS]: {
        leyends: {
            BUTTON_1: "Atrás",
            PADDOCKS_AREA: "m²",
            BUTTON_2: "Reiniciar",
            REAL_CHARGE: "Ejemplares",
            REAL_PADDOCKS_FORRAGE: "gr/m²",
        },
        titles: {
            PADDOCKS_AREA: "Área de cada potrero:",
            PADDOCKS_FORRAGE: "Producción de pasto:",
            NUMBER_OF_PADDOKS: "Número de potreros:",
            REAL_CHARGE: "Los potreros pueden mantener",
        },
    },
};

export { es }