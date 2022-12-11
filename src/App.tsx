import React from 'react'
import Pokecard from './Pokecard/Pokecard'
import Logo from './resources/pikachu.png'
import moves from './moves.json'

export const App: React.FC = () => {
  const ability = {
    name: 'Статика',
    description: 'С вероятность 30% может парализовать цель'
  }

  return <Pokecard photo={Logo} ability={ability} gender="male" view="usual" name="Пикачу" moves={moves} power={110}/>
}
