import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-4 pb-20 gap-16 sm:p-20"
      style={{
        backgroundImage: "url('/background.jpg')", backgroundSize: "cover", backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
       {/* Navigation Tab */}
      <nav className="w-full flex justify-between mb-8">
        <div className="flex items-center">
          <Image
            src="/rick.png"
            alt="Rick icon"
            width={40}
            height={40}
          />
        </div>   
        <Link href="/characters" className="text-lg font-medium hover:underline hover:underline-offset-4">
           <Button variant="contained" color="primary" href="#">
            Get Started
          </Button>   
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

        <div className="flex gap-4 flex-col sm:flex-row"> 
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/characters"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div> 
      </main> 
      {/* Add this image container just before closing the main div */}
      <div className="fixed bottom-7 left-4 z-50">
        <Image
          src="/rick.png"
          alt="Rick icon"
          width={60}
          height={60}
        />
      </div>

      <footer className="row-start-3 items-left justify-left" >         
          <div className="text-left text-lg font-medium mb-3">
            <label> Resources </label>   
          </div> 
          <div className="flex flex-wrap gap-[34px] justify-between">           
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Contact
            </a>       
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://rickandmortyapi.com/documentation/#character"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              API Docs →
            </a>
          </div>        
      </footer>
    </div>
  );
}
