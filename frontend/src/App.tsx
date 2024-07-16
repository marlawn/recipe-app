import { useState } from "react";
import { AddRecipe } from "./components/AddRecipe";
import { Navbar } from "./components/Navbar";
import { ScrollView } from "./components/ScrollView";

function App() {
  const [showHome, setShowHome] = useState(true);

  const handleToggleShowHome = () => {
    setShowHome(!showHome);
  }

  return (
    <>
      <div className="flex flex-col h-screen">
      <Navbar onToggleShowHome={handleToggleShowHome} />
      <div className="flex justify-center items-center h-full">
        <ScrollView />
        {!showHome && <AddRecipe onToggleShowHome={handleToggleShowHome}/>}
      </div>
    </div>
    </>
  )
}

export default App
