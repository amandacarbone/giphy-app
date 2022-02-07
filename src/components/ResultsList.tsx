import { GIF } from "../models/GIF";
import { Result } from "./Result";

export function ResultsList(props: {gifs: GIF[]}) {

    return (
        <div>
            <h2>Results</h2>
            {props.gifs.map((gif: any) => 
            <Result key={gif.id} gif={gif}></Result>)}
        </div>
    );

}