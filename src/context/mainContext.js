import React, {createContext, useCallback, useState} from "react";

export const MainContext = createContext({})

export const MainContextProvider = ({ children }) => {
    const [selectedPlayers, setSelectedPlayers] = useState({
        player_1: null,
        player_2: null,
    })
    const [activeScreen, setActiveScreen] = useState(0)

    const selectPlayer = (character, characterNumber=1 ) => {
        setSelectedPlayers((prev) => ({...prev, [`player_${characterNumber}`]: character}))
    }

    return (
        <MainContext.Provider value={{selectedPlayers, selectPlayer, activeScreen, setActiveScreen}}>
            { children }
        </MainContext.Provider>
    )
}