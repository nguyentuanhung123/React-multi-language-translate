import { Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Languageoption from "./language-dropdown"
import i18next from 'i18next'// step-6

const App = () => {

  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  } // step-7

  return (
    <div>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)}/>
      <main className="mt-10 flex justify-center items-center text-[24px] font-bold">
        <Outlet />
      </main>
    </div>
  )
}

export default App
