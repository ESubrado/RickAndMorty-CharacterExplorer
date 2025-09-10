"use client";

import useFetch from "@/hooks/useFetch";
import useInputValidation from "@/hooks/useInputValidation";
import CharacterCard from "./CharacterCard";
import AppFooter from "../footer";
import { useEffect, useState } from "react";
import AppNav from "../navigation";

// Animation styles
const cardAnimation =
  "transition-all duration-500 ease-in-out transform opacity-0 scale-95 animate-cardIn";
const cardInKeyframes = `
@keyframes cardIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`;

export default function Character() {  
 
  const { value: filter, error: inputError, onChange: handleInputChange } = useInputValidation();
  const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (inputError) {
      setShowError(true);
      const timer = setTimeout(() => {         
        setShowError(false)
      }
      , 3500);
      return () => clearTimeout(timer);
    }
  }, [inputError]);

  // Filter characters by name (case-insensitive)
  const filteredCharacters = data?.results?.filter((char: any) =>
    char.name.toLowerCase().includes(filter.toLowerCase())
  );  
 
  if(error) console.log("Error: ", error);

  return (
    <>
      <style>{cardInKeyframes}</style>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-4 pb-20 gap-8 sm:p-20"
      style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Navigation Tab */}
        <AppNav />
        {/* Main Content */}
        <main className="flex items-center justify-center mb-8 sm:mb-6"> 
          { loading ? (           
            <div>Loading...</div>             
          ) : (
            error ? (
              <>
                <div>Problem on getting character data. Please see administrator</div>                
              </>             
            ) : (
            <>   
              <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl text-center font-bold mb-2">Characters</h1>   
                  <div className="flex flex-col justify-center items-center mx-8 mb-4">
                      {/* Search character input */}
                    <input
                      type="text"
                      placeholder="Search by character name"
                      data-testid="search-character-input"
                      value={filter}
                      onChange={handleInputChange}
                      className="mb-4 px-4 py-2 bg-transparent text-gray-50 placeholder-gray-300 focus:outline-none border-0 border-b-2 border-gray-500 focus:border-gray-600 w-72 text-center"
                    />
                    {showError && inputError && (
                      <span className="text-red-400 text-sm mb-3">{inputError}</span>
                    )}
                  </div>
                                  
                  <div className="flex flex-wrap justify-center mx-10 lg:mx-28">
                    {filteredCharacters.length === 0 ? ( // No characters found message
                      <span className="text-gray-300 text-lg mt-8">
                        No matching characters.
                      </span>
                    ) : (
                      filteredCharacters
                      .slice(0, 14)
                      .map((char: any, idx: number) => (
                        <div                         
                          key={char.id}
                          className={cardAnimation}
                          style={{
                            animation: `cardIn 0.5s ease forwards`,
                            animationDelay: `${idx * 0.07}s`,
                          }}
                        >
                          <CharacterCard character={char} />
                        </div>
                      ))
                    )}
                </div>                
              </div>
            </>)
          )
          }
        </main>           
        <AppFooter />
      </div>      
    </>
    
  );
}