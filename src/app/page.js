"use client"
import { motion } from "framer-motion";

import { useMessages } from "@/contexts/appContext";
import { MdArrowOutward } from "react-icons/md";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motivatorAiFeatures } from "@/constants/constants";

export default function Home() {
  const{isDark} = useMessages()
  return (
    <div  className={isDark ? "dark flex flex-col h-screen" : "light flex flex-col h-screen"}>
      <main className=" bg-backgroundColor text-textColor flex flex-col items-center gap-5 pt-20">
      <span className="font-semibold text-sm">Jan 23,2025</span>
      <motion.h1 initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.2}} className="text-3xl md:text-5xl lg:text-7xl tracking-wide px-3 text-center">Introducing MotivatorAI</motion.h1>
      <div className="flex flex-col gap-7 sm:flex-row  items-center my-10 font-medium">
      <Link href="/chat-page" className="flex gap-1 items-center bg-textColor text-backgroundColor px-6 py-2 rounded-full">Try MotivatorAI  <MdArrowOutward className="h-4 w-4" /></Link>
      </div>
      <div className="w-3/4 lg:w-3/5 text-base/7 font-semibold">
      {motivatorAiFeatures.map((feature,index) => {
        return (
          <motion.p key={index} initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.1}} className="mb-5">{feature}</motion.p>
        )
        })}
      </div>
    </main>
    <Contact />
    <Footer />
    </div>
  );
}
