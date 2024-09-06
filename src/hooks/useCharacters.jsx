import { useEffect, useState } from "react";
import { reqCharacters } from "../service/characters";

export const useCharacters = (currentPage, searchCharacter) => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (searchCharacter) {
      reqCharacters(currentPage, searchCharacter).then((data) => {
        setCharacters(data.results);
        setTotal(data.total);
      });
    }
  }, [currentPage, searchCharacter]);

  return {
    characters,
    total
  };
};
