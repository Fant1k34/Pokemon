import React from 'react';
import styles from './Pokecard.module.css';
import { cn } from "../api/common";

type props = {
  name: string;
  gender: "male" | "female" | "other";
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
        <div className={cn(styles.Pokecard__description, styles.Description)}>
          { info.map((element) => (
              <span className={cn(styles.Description__element, styles.Property)}>
                <span className={styles.Property__name}>{ element.prop }</span>
                <span className={styles.Property__value}>{ element.value }</span>
              </span>
            )
          )}
        </div>
      </header>
      <main>
        <section className={cn(styles.Pokecard__footer, styles.Moves)}>
          { moves.map((element) => {
            return (
              <span className={cn(styles.Moves__move, styles.Move)}>
                <div className={styles.Move__name}>
                  { element.name }
                </div>
                <span className={styles.Move__description}>{ element.description }</span>
              </span>
            );
          }) }
        </section>
      </main>
    </div>
  );
}

export default Pokecard;
