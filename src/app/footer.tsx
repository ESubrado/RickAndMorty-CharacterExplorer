import Image from "next/image";


const AppFooter = () => {
  return (
    <>  
     <footer className="row-start-3 w-full flex items-center justify-between px-0 py-4 gap-6">
      {/* Rick image on the left */}
      <div className="flex items-center">
       <Image
            src="/rickalt.png"
            alt="Rick icon"
            width={60}
            height={60}
        />
      </div>
        {/* Resources and links on the center */}
      <div className="flex flex-col items-center text-center gap-2 text-sm">
        <span className="m-0 p-0 font-semibold">
          <label className="text-lg">Resources</label>
        </span>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/essubrado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            style={{ filter: "invert(1)" }}
          />
          Contact →
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
            style={{ filter: "invert(1)" }}
          />
          API Docs →
        </a>
         <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://edgeanalytics-client.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            style={{ filter: "invert(1)" }}
          />
          Real Time Events Dashboard Project →
        </a>
      </div>
      {/* empty on the right to balance flex between */}
      <div className="flex items-start">
        <span className="invisible">By: es</span>
      </div>
    </footer>
    </>
    
  );
}


export default AppFooter;