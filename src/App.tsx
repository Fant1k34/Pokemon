import React from 'react';
import Pokecard from "./Pokecard/Pokecard";
import Logo from "./resources/pikachu.png";
import moves from "./moves.json";
import { MainPanel } from "./MainPanel/MainPanel";
import {SecondaryPanel} from "./SecondaryPanel/SecondaryPanel";
import styles from "./App.module.css";

export const App = () => {
    return (
        <>
            <MainPanel main="Интересно" secondary="А я вообще существую?" gender="female" className={styles.Container}/>
        </>
    );
};
