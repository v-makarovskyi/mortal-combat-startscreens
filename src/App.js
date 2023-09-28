import React, { useContext } from "react";
import MainScreen from "./components/main_screen/MainScreen";
import VsScreen from "./components/vs_screen/VsScreen";
import { MainContext } from "./context/mainContext";

function App() {
  const { activeScreen } = useContext(MainContext)
  const screens = [<MainScreen />, <VsScreen/>]

  return (
    <div className="App">
      {screens[activeScreen]}
    </div>
  );
}

export default App;
