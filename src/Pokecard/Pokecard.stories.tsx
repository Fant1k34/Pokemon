import React from 'react';

import Pokecard from './Pokecard';
import Logo from "../resources/pikachu.png";
import moves from "../moves.json";

export default {
    title: 'Pokecard',
    component: Pokecard,
};

const ability = {
    name: "Статика",
    description: "Парализует противника"
};

export const Component = () => <Pokecard photo={Logo}
                                         ability={ability}
                                         gender={"female"}
                                         moves={moves}
                                         name={"Пикачу"}
                                         power={150}
                                         view={"usual"}/>;

export const Christmas = () => <Pokecard photo={Logo}
                                         ability={ability}
                                         gender={"female"}
                                         moves={moves}
                                         name={"Пикачу"}
                                         power={150}
                                         view={"christmas"}/>;
