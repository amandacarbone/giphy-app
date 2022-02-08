import { useState } from "react";

export function SearchForm(props: {onSubmit: (searchTerm: string) => void}) {

    const [input, setInput] = useState("");

    return (
        <div className="searchForm">
            <input className="searchInput" type="text" value={input} onChange={(e) => setInput(e.target.value)} /> 
            <button className="searchButton" onClick={() => props.onSubmit(input)}>Search</button>
        </div>
    );

}