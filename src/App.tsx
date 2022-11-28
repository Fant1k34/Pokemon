import React from 'react';
import Pokecard from "./Pokecard/Pokecard";
import Logo from "./resources/pikachu.png";
import moves from "./moves.json";
import { MainPanel } from "./MainPanel/MainPanel";
import {SecondaryPanel} from "./SecondaryPanel/SecondaryPanel";

export const App = () => {
    const ability = {
        name: "Статика",
        description: "Парализует противника"
    };

    return (
        <>
            <Pokecard photo={Logo}
                         ability={ability}
                         gender={"female"}
                         moves={moves}
                         name={"Пикачу"}
                         power={150}
                         view={"usual"}/>
        </>
    );
};
