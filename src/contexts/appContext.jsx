"use client";

import { createContext, useContext, useEffect, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({children}) => {
    const [allMessages, setAllMessages] = useState([])
    const [isDark , setIsDark] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme') ?? 'true';
        setIsDark(theme === 'true');
      }, []);

    return <MessageContext.Provider value={{allMessages, setAllMessages, isDark, setIsDark}}>
        {children}
    </MessageContext.Provider>
}

const useMessages = () => useContext(MessageContext)

export {MessageProvider, useMessages}