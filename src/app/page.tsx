"use client";

import Image from "next/image";
import Link from "next/link";
import TransparentBtn from "./components/TransparentBtn";
import AppFooter from "./footer";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-4 pb-20 gap-8 sm:p-20"
      style={{
        backgroundImage: "url('/background.jpg')", backgroundSize: "cover", backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
       {/* Navigation Tab */}
      <nav className="w-full flex justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/rick.png"
            alt="Rick icon"
            width={40}
            height={40}
          />
        </div>   
        <Link href="/characters" className="text-lg font-medium hover:underline hover:underline-offset-4" >
           <TransparentBtn variant="contained">
            Get Started
          </TransparentBtn>   
        </Link>  
      </nav>      
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="mb-4 flex justify-center w-full">
           <Image
            className="dark:invert"
            src="/rickandmortylabel.png"
            alt="Rick and morty logo"
            width={680}
            height={78}
            priority
          />
        </div>
       
       <label className="text-center sm:text-left text-2xl sm:text-3xl font-medium max-w-[800px]">
          Welcome to the Rick and Morty character explorer!
       </label>

        <div className="flex gap-4 w-full justify-center"> 
         <Link href="/characters" passHref>
          <span
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] cursor-pointer"
          >
            Get Started
          </span>
        </Link>
        </div> 
      </main>     
      <AppFooter />
    </div>
  );
}
