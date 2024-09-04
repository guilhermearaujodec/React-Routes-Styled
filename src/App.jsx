import { Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"

// import { Menu } from "react-router-dom"

function App() {


  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App