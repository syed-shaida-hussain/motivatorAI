"use client";

import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

const theme = localStorage.getItem("theme") ?? "true"

const MessageProvider = ({children}) => {
    const [allMessages, setAllMessages] = useState([])
    const [isDark , setIsDark] = useState(theme === "true" ? true : false);

    return <MessageContext.Provider value={{allMessages, setAllMessages, isDark, setIsDark}}>
        {children}
    </MessageContext.Provider>
}

const useMessages = () => useContext(MessageContext)

export {MessageProvider, useMessages}