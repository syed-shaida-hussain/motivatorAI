import { IoLogoDropbox } from "react-icons/io5"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export const Header = ({isDark,setIsDark}) => {

    const toggleTheme = () => {
        setIsDark((dark) => !dark)
        localStorage.setItem("theme", !isDark)
      }
  return (
    <header className="bg-backgroundColor text-textColor flex gap-2 items-center justify-around p-5">
          <button className="flex items-center gap-2">
          <IoLogoDropbox className="w-7 h-7"/>
          <span className="font-medium">MotivatorAI</span>
          </button>
          <button onClick={toggleTheme}>{isDark ? <MdLightMode className="w-7 h-7"/> : <MdDarkMode className="w-7 h-7"/>}</button>
        </header>
  )
}
