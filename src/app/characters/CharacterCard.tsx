"use client";

import Image from "next/image";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-transparent border border-blue-400 rounded-lg shadow-lg p-4 flex flex-col items-center w-56 m-2">
      <Image
        src={character.image}
        alt={character.name}
        width={100}
        height={100}
        className="rounded-full mb-2"
      />
      <h2 className="text-md font-bold mb-1 text-center">{character.name}</h2>
      <p className="text-sm mb-1">Status: {character.status}</p>
      <p className="text-sm mb-1">Species: {character.species}</p>
    </div>
  );
}