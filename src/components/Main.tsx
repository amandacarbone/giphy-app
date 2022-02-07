import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { useEffect, useState } from "react";
import { getTrending, getSearch } from "../services/GIPHYApi";
import { GIF } from "../models/GIF";

export function Main() {

    const [gifs, setGifs] = useState<GIF[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        getTrending().then(data => setGifs(data));

    }, []);

    function setSearch(search: string) {

        setSearchTerm(search);       

    }

    return (
        <div>

            <SearchForm 
            onSubmit={(searchTerm) => 
            setSearch(searchTerm)}></SearchForm>

            <ResultsList gifs={gifs}></ResultsList>

        </div>
    );

}