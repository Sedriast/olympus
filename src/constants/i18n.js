import { language_keys } from "./keys";

const es = {
    [language_keys.ERRORS]: {
        GRAZING_AREA: "El área es incorrecta,reintente",
        CAPACITY: "Aforo incorrecto, porfavor reintente",
        GRASS_TYPE: "A ocurrido un error en el tipo de pasto",
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
};

export { es }