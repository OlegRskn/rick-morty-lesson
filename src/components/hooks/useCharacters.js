import { fetchCharacters } from "../../api";
import { useState, useEffect } from "react";

export const useCharacters = (ids) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ids || ids.length === 0) return;
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      Array.isArray(data) ? setCharacters(data) : setCharacters([data]);
      console.log(data);
      setIsLoading(false);
    });
  }, [ids]);

  return { characters, isLoading };
};
