import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";
import axios from "axios";

export default function SearchPage() {
 
    const [searchTerm, setSearchTerm] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (searchTerm === "") { return };
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
            .then((res) => {
                setCharacters([res.data.results]);
            })
            .catch((e) => {
                alert(`Uh oh, there was an error!\n\n${e}`);
            })
    }, [searchTerm]);

    return (
        <>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CharacterList characters={characters} />
        </>
    );
}
