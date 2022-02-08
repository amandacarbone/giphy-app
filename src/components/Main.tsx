import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { useEffect, useState } from "react";
import { getTrending, getSearch } from "../services/GIPHYApi";
import { GIF } from "../models/GIF";

export function Main() {

    const [gifs, setGifs] = useState<GIF[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        getTrending().then(response => setGifs(response.data));

    }, []);

    return (
        <div>

            <SearchForm onSubmit={(searchTerm) => setSearchTerm(searchTerm)}></SearchForm>

            <ResultsList gifs={gifs}></ResultsList>

        </div>
    );

}