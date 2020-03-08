import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";
import axios from "axios";
import { Typography } from "@material-ui/core";

export default function SearchPage() {
 
    const [searchTerm, setSearchTerm] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (searchTerm === "") { 
            setCharacters([]);
            return
        };
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
            .then((res) => {
                setCharacters(res.data.results);
                console.log(res.data.results)
            })
            .catch((e) => {
                alert(`Uh oh, there was an error!\n\n${e}`);
            })
    }, [searchTerm]);

    return (
        <>
            <Typography variant="h4" component="h2" gutterBottom>Search for a character</Typography>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CharacterList characters={characters} />
        </>
    );
}
