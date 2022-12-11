import React from 'react'
import styles from './Pokecard.module.css'
import { cn } from '../api/common'
import { SecondaryPanel } from '../SecondaryPanel/SecondaryPanel'
import { MainPanel } from '../MainPanel/MainPanel'

interface Props {
  name: string
  gender: 'male' | 'female'
  photo: string
  power: number
  ability: {
    name: string
    description: string
  }
  moves: Array<{
    name: string
    description: string
  }>
  view: 'usual' | 'christmas'
}

const Pokecard: React.FC<Props> = ({ name, gender, photo, power, ability, moves, view }) => {
  const info = [
    {
      prop: 'Имя',
      value: name
    },
    {
      prop: 'Сила',
      value: power
    },
    {
      prop: 'Способность',
      value: ability.name
    },
    {
      prop: 'Описание способности',
      value: ability.description
    }
  ]

  return (
    <div className={styles.Pokecard}>
      <header className={styles.Pokecard__header}>
        <img src={photo} alt="Photo" className={styles.Pokecard__photo}/>
        <div className={cn(styles.Pokecard__description, styles.Property)}>
          { info.map((element, id) => (
              <SecondaryPanel main={element.prop}
                              secondary={String(element.value)}
                              gender={gender}
                              key={id}/>
          )
          )}
        </div>
      </header>
      <main>
        <section className={cn(styles.Pokecard__footer, styles.Moves)}>
          { moves.map((element: {
            name: string
            description: string
          }, id: number) => (
              <MainPanel main={element.name}
                         secondary={String(element.description)}
                         gender={gender}
                         key={id}
              />
          )) }
        </section>
      </main>
      { view === 'christmas' && <canvas className={styles.Snow}></canvas> }
    </div>
  )
}

export default Pokecard
