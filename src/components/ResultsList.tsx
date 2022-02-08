import { GIF } from "../models/GIF";
import { Result } from "./Result";

export function ResultsList(props: {gifs: GIF[]}) {

    return (
        <div className="resultsList">
            <h2 className="resultsHeader">Results</h2>
            {props.gifs.map(gif => <Result key={gif.id} gif={gif}></Result>)}
        </div>
    );

}