import React from 'react';
import styles from './Pokecard.module.css';
import { cn } from "../api/common";
import {SecondaryPanel} from "../SecondaryPanel/SecondaryPanel";
import {MainPanel} from "../MainPanel/MainPanel";

type props = {
  name: string;
  gender: "male" | "female";
  photo: string;
  power: number;
  ability: {
    name: string;
    description: string;
  };
  moves: {
    name: string;
    description: string;
  }[];
  view: "usual" | "christmas";
};

const Pokecard = ({ name, gender, photo, power, ability, moves, view }: props) => {
  const info = [
    {
      prop: "Имя",
      value: name,
    },
    {
      prop: "Сила",
      value: power,
    },
    {
      prop: "Способность",
      value: ability.name,
    },
    {
      prop: "Описание способности",
      value: ability.description,
    }
  ];

  return (
    <div className={styles.Pokecard}>
      <header className={styles.Pokecard__header}>
        <img src={photo} alt="Photo" className={styles.Pokecard__photo}/>
        <div className={cn(styles.Pokecard__description, styles.Property)}>
          { info.map((element) => (
              <SecondaryPanel main={element.prop}
                              secondary={String(element.value)}
                              gender={gender}/>
            )
          )}
        </div>
      </header>
      <main>
        <section className={cn(styles.Pokecard__footer, styles.Moves)}>
          { moves.map((element) => (
              <MainPanel main={element.name}
                         secondary={String(element.description)}
                         gender={gender}
              />
          )) }
        </section>
      </main>
    </div>
  );
}

export default Pokecard;
