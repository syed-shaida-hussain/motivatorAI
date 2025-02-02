"use client";

import { useState } from "react"
import { IoArrowUpCircleSharp, IoLogoDropbox } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { marked } from "marked";
import { useMessages } from "@/contexts/appContext";
import { persona } from "@/constants/constants";

const ChatPage = () => {
  const [userInput, setUserInput] = useState("")
  const [loading, setLoading] = useState(false)
  const {allMessages, setAllMessages, isDark} = useMessages()
  const openAiKey =  process.env.NEXT_PUBLIC_OPENAI_API_KEY

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true)
    const openAIUrl = "https://api.openai.com/v1/chat/completions";
    const token = `Bearer ${openAiKey}`
    const model = "gpt-4o-mini"

    let messagesToSend = [
      ...allMessages,
      {role : "user", content : ` ${persona}  ${userInput}`}
    ]

    let res = await fetch (openAIUrl,{
      method : "POST",
      headers : {
        'Authorization' : token,
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        model : model,
        messages : messagesToSend
      })
    })

    let data = await res.json()
    if(data){
      let updatedMessages = [...messagesToSend, data?.choices[0]?.message]
      setAllMessages(updatedMessages)
      setUserInput("")
    }
    setLoading(false)
  }

  const formatMarkdownResponse = (text) => {
    const html = marked(text);
    return <div className="markup" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div  className={isDark ? "dark" : "light"}>
    <div className="flex flex-col justify-between flex-1 bg-backgroundColor text-textColor">
        <div className="flex flex-col mx-auto gap-7 w-5/6 lg:w-1/2 overflow-y-auto scrollbar-hidden py-10">
          {allMessages.length > 0 ? allMessages?.map((msg,index) => <div key={index} className="flex gap-5">
            {msg?.role === "assistant" ? <IoLogoDropbox className="min-w-7 min-h-7" /> :<FaRegUserCircle className="min-w-7 min-h-7" />}
            <div className="leading-relaxed">{msg.role === "user" ? msg?.content?.split(persona)[1] : formatMarkdownResponse(msg.content)}</div>
          </div>) : <h1 className="flex justify-center items-center min-h-[50vh] text-4xl xl:text-5xl">What can i help with?</h1>}
        </div>
        <form onSubmit={sendMessage} className="flex items-center justify-center text-textColor bg-inputBg w-11/12 lg:w-1/2 h-24 rounded-lg px-5 fixed bottom-5 left-4 sm:left-6 md:left-8 lg:left-1/4 ">
          <input className="text-textColor bg-inputBg w-full h-full outline-none rounded-lg" type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          {loading ? <div className="w-7 h-7 border-4 border-t-4 border-textColor rounded-full animate-spin"></div> : <button type="submit">
            <IoArrowUpCircleSharp className="w-7 h-7"/>
          </button>}
        </form>
    </div>
    </div>
  )
}

export default ChatPage