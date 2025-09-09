"use client";

import Image from "next/image";
import Link from "next/link";
import TransparentBtn from "../components/TransparentBtn";

import useFetch from "../hooks/useFetch";
import CharacterCard from "./CharacterCard";
import { useState } from "react";
import RickImage from "../components/RickImage";
import AppFooter from "../footer";

export default function Character() {
  
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useFetch("https://rickandmortyapi.com/api/character");

  // Filter characters by name (case-insensitive)
  const filteredCharacters = data?.results?.filter((char: any) =>
    char.name.toLowerCase().includes(filter.toLowerCase())
  );
 
  if(error) console.log("Error: ", error);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-4 pb-20 gap-16 sm:p-20"
    style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
         <nav className="w-full flex justify-between mb-8">
            <div className="flex items-center">
              <Image
                src="/rick.png"
                alt="Rick icon"
                width={40}
                height={40}
              />
              </div>   
            <Link href="/">
                <TransparentBtn variant="contained" color="primary">
                    Back to Main Page
                </TransparentBtn>
            </Link>
        </nav>
        <main className="flex items-center justify-center"> 
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
                  <h1 className="text-2xl text-center font-bold mb-4">Characters</h1>   
                  <div className="flex flex-col justify-center items-center mx-8 mb-4">
                    <input
                      type="text"
                      placeholder="Search by character name..."
                      value={filter}
                      onChange={e => setFilter(e.target.value)}
                      className="mb-6 px-4 py-2 bg-transparent text-gray-50 placeholder-gray-300 focus:outline-none border-0 border-b-2 border-gray-500 focus:border-gray-600 w-72 text-center"
                    />
                  </div>
                                  
                  <div className="flex flex-wrap justify-center mx-8">
                    {filteredCharacters.map((char: any) => (
                      <CharacterCard key={char.id} character={char} />
                    ))}
                </div>                
              </div>
            </>)
          )
          }
        </main>           
        <AppFooter />
    </div>
  );
}