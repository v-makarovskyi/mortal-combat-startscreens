import React, { useState, useCallback, useEffect, useContext } from 'react'
import { characters } from '../../data'
import CharacterItem from './CharacterItem'
import { MainContext } from '../../context/mainContext'
import styles from './MainScreen.module.css'

export default function CharactersList({ children }) {
    const {selectPlayer, setActiveScreen} = useContext(MainContext)
    const [playerOne, setPlayerOne] = useState({index:0, isSelected: false})
    const [playerTwo, setPlayerTwo] = useState({index:1, isSelected: false})
    const characterColumns = 5

   const selectCharacter = useCallback((item) => {
    if(playerTwo.isSelected) return
    let player_num = 1
    if(playerOne.isSelected) {
        player_num = 2
        setPlayerTwo((prev) => ({...prev, isSelected: true}))
    } else {
        setPlayerOne((prev) => ({...prev, isSelected: true}))
    }
    selectPlayer(item, player_num)
   }, [playerOne, playerTwo, selectPlayer])

   const keyHandler = useCallback((e) => {
    if(playerTwo.isSelected) return
    let index = !playerOne.isSelected ? playerOne.index : playerTwo.index
    if(e.key === 'ArrowDown') {
        index += characterColumns
    } else if (e.key === 'ArrowUp') {
        index -= characterColumns
    } else if (e.key === 'ArrowLeft') {
        index -= 1
    } else if (e.key === 'ArrowRight') {
        index += 1
    } else if (e.key === 'Enter') {
        selectCharacter(characters[index])
    }
    if(characters[index]) {
        if(playerTwo.isSelected) {
            setPlayerTwo((prev) => ({...prev, index: index}))
        } else {
            setPlayerOne((prev) => ({...prev, index: index}))
        }
    }
   }, [playerOne, playerTwo, selectCharacter])

   useEffect(() => {
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
   }, [keyHandler])

  return (
    <>
        {
            characters?.map((c, i) => (
                <CharacterItem 
                    key={c.id}
                    img={c.image_icon}
                />
            ))
        }
        {children({ playerOne: characters[playerOne.index], playerTwo: characters[playerTwo.index] })}
    </>
  )
}
