"use client"
import { motion } from "framer-motion";

import { useMessages } from "@/contexts/appContext";
import { MdArrowOutward } from "react-icons/md";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const{isDark} = useMessages()
  return (
    <div  className={isDark ? "dark flex flex-col h-screen" : "light flex flex-col h-screen"}>
      <main className=" bg-backgroundColor text-textColor flex flex-col items-center gap-5 pt-20">
      <span className="font-semibold text-sm">Jan 23,2025</span>
      <motion.h1 initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.2}} className="text-3xl md:text-5xl lg:text-7xl tracking-wide">Introducing MotivatorAI</motion.h1>
      <div className="flex flex-col gap-7 sm:flex-row  items-center my-10 font-medium">
      <Link href="/chat-page" className="flex gap-1 items-center bg-textColor text-backgroundColor px-6 py-2 rounded-full">Try MotivatorAI  <MdArrowOutward className="h-4 w-4" /></Link>
      </div>
      <div className="w-3/4 lg:w-3/5 text-base/7 font-semibold">
      <motion.p initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.1}} className="mb-5" >
      {`MotivatorAI is designed to bring positive energy and motivation directly to users through interactive, personalized, and uplifting conversations. In a world where mental well-being and motivation are essential, this AI model serves as a trusted companion, offering encouragement and guidance to help users achieve their goals. Whether it’s boosting productivity, staying focused on personal goals, or simply providing a daily dose of inspiration, MotivatorAI empowers individuals to push beyond their limits and embrace challenges with a positive mindset. By harnessing the power of AI, MotivatorAI provides an accessible, constant source of motivation anytime, anywhere, ensuring that users feel supported through their journey..`}</motion.p>
      <motion.p initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.1}} className="mb-5">{`MotivatorAI is built with a modern and efficient tech stack that ensures seamless performance and an engaging user experience. At the core of the application is the OpenAI API, which powers the AI's responses, enabling it to offer dynamic, personalized motivational messages. By leveraging OpenAI’s advanced language models, MotivatorAI is able to craft responses that are inspiring, relatable, and tailored to each user's needs. On the front end, the app is built with Next.js, a React-based framework that allows for server-side rendering and optimized performance, ensuring fast load times and an efficient user experience. This combination of OpenAI and Next.js enables MotivatorAI to scale while maintaining high performance.`}</motion.p>
      <motion.p initial = {{opacity : 0 , y : 50}} whileInView = {{opacity : 1 , y : 0}} transition={{duration : 0.6 , delay : 0.1}}>{`For styling and smooth user interactions, TailwindCSS is utilized to create a clean and responsive design, enabling quick customization and a seamless layout across various devices. The app also integrates Marked, a JavaScript library used to render Markdown content, allowing the dynamic creation of motivational quotes and messages in an easy-to-read format. To bring the app to life with animations and transitions, Framer Motion is incorporated, providing smooth, fluid animations that enhance user engagement. Together, this powerful tech stack ensures that MotivatorAI is not only a reliable source of motivation but also an interactive and enjoyable experience for its users.`}</motion.p>
      </div>
    </main>
    <Contact />
    <Footer />
    </div>
  );
}
