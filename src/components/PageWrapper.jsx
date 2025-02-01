import React from 'react'
import { Header } from './Header'

const PageWrapper = ({isDark,setIsDark}) => {
  return (
    <div className={isDark ? "dark flex flex-col h-screen" : "light flex flex-col h-screen"}>
        <Header isDark = {isDark} setIsDark = {setIsDark} />
    </div>
  )
}

export default PageWrapper