import Marca1 from "../landings/marca1/Landing";
import marca1Css from "../landings/marca1/landing.css";
import Marca2 from "../landings/marca2/Landing";
import marca2Css from "../landings/marca2/landing.css";

export const landings = {
    marca1: { Component: Marca1, css: marca1Css },
    marca2: { Component: Marca2, css: marca2Css },
};

export type LandingId = keyof typeof landings;