"use client";

import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const theme = "dark"

export default function Home() {
  const [isDark , setIsDark] = useState(theme === "true" ? true : false);
  return (
    <div className="">
      <PageWrapper isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
