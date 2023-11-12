
import { SvgXml } from 'react-native-svg';
import { icon_keys, img_keys } from "./keys";

import Cow from "./assets/decorations/cow_1111310.svg";
import Area from "./assets/decorations/area_1111237.svg";
import Cart from "./assets/decorations/cart_1111232.svg";
import Grass from "./assets/decorations/grass_1111239.svg";
import Balance from "./assets/decorations/balance_1111206.svg";
import CowHead from "./assets/decorations/cowhead_1111254.svg";

import Gizu from "./assets/logos/gizuLogo.png";
import Ebate from "./assets/logos/ebateLogo.png";
import Background from "./assets/background.png";
import Creing from "./assets/logos/creingLogo.png";

export const Img_ = {
    GIZU: Gizu,
    EBATE: Ebate,
    CREING: Creing,
    BACKGROUND: Background,
};

const type_ico = {
    [icon_keys.COW]: Cow,
    [icon_keys.AREA]: Area,
    [icon_keys.CART]: Cart,
    [icon_keys.GRASS]: Grass,
    [icon_keys.COWHEAD]: CowHead,
    [icon_keys.BALANCE]: Balance,
};

export default function Icon(type = "") {
    //return <SvgUri uri={type_ico[type]} width="100%" height="100%"/>;
    return <SvgXml xml={type_ico[type]} width="100%" height="100%" />;
}

