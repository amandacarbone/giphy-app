import { useState } from "react";

export function SearchForm(props: {onSubmit: (searchTerm: string) => void}) {

    const [input, setInput] = useState("");

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> 
            <button onClick={() => props.onSubmit(input)}>Search</button>
        </div>
    );

}