'use client'
import { useState, useEffect } from "react";
import Card from "@/app/components/card/Card";
import Search from "@/app/components/search/Search";

async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results.slice(0, 100).map((character: any) => ({
    id: character.id,
    image: character.image,
    name: character.name,
    status: character.status,
    location: character.location.name,
  }));
}

export default function Home() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
      setFilteredCharacters(charactersData);
    };

    loadCharacters();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Rick and Morty Characters</h1>
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredCharacters.map((character: { id: Key | null | undefined; image: string; name: string; status: string; location: string; }) => (
          <Card
            key={character.id}
            id={character.id as number}
            image={character.image}
            name={character.name}
            status={character.status}
            location={character.location}
          />
        ))}
      </div>
    </div>
  );
}
