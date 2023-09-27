import React, { useState, useCallback, useEffect, useContext } from 'react'
import { characters } from '../../data'
import CharacterItem from './CharacterItem'
import { MainContext } from '../../context/mainContext'
import styles from './MainScreen.module.css'

export default function CharactersList({ children }) {
    const {selectPlayer, setActiveScreen} = useContext(MainContext)
    const [playerOne, setPlayerOne] = useState({i:0, isSelected: false})
    const [playerTwo, setPlayerTwo] = useState({i:1, isSelected: false})
    const characterColumns = 5

   const selectCharacter = useCallback((item) => {
    if(playerTwo.isSelected) return
    let player_num = 1
    if(playerOne.isSelected) {
        player_num = 2
        setPlayerTwo((prev => ({...prev, isSelected: true})))
    } else {
        setPlayerOne((prev => ({...prev, isSelected: true})))
    }
    selectPlayer(item, player_num)
   }, [playerOne, playerTwo, selectPlayer])

   const keyHandler = useCallback((e) => {
    if(playerTwo.isSelected) return
    let index = !playerOne.isSelected ? playerOne.i : playerTwo.i
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
        if(playerOne.isSelected) {
            setPlayerTwo((prev) => ({...prev, i: index}))
        } else {
            setPlayerOne((prev) => ({...prev, i: index}))
        }
    }
   }, [playerOne, playerTwo, selectCharacter])

   useEffect(() => {
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
   }, [keyHandler])

   useEffect(() => {
    let timer
    if(playerOne.isSelected && playerTwo.isSelected) {
        timer = setTimeout(() => {
            setActiveScreen(1)
        }, 2000)
    }
    return () => clearTimeout(timer)
   }, [playerOne, playerTwo, setActiveScreen])

  return (
    <>
        {
            characters?.map((character, index) => (
                <CharacterItem 
                    key={character.id}
                    img={character.image_icon}
                    isActiveOne={playerOne.i === index}
                    isActiveTwo={playerTwo.i === index}
                    isSelectedOne={playerOne.isSelected}
                    isSelectedTwo={playerTwo.isSelected}
                />
            ))
        }
        {children({ playerOne: characters[playerOne.i], playerTwo: characters[playerTwo.i] })}
    </>
  )
}
