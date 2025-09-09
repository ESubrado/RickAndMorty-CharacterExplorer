import Image from "next/image";
import RickImage from "./components/RickImage";

const AppFooter = () => {
  return (
    <>  
     <footer className="row-start-3 w-full flex items-center justify-between px-0 py-4 gap-6">
      {/* Rick image on the left */}
      <div className="flex items-center">
       <Image
            src="/rick.png"
            alt="Rick icon"
            width={60}
            height={60}
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg px-0 py-4 mb-2 font-semibold">
          <label className="text-lg">Resources</label>
        </span>
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
      {/* Resources and links on the right */}
      <div className="flex items-start">
        <span className="invisible">By: es</span>
      </div>
    </footer>
    </>
    
  );
}


export default AppFooter;