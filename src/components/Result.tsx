import { GIF } from "../models/GIF";

export function Result(props: {gif: GIF}) {

    return (
        <div className="result">
            <h3>{props.gif.title}</h3>
            <img src={props.gif.images.original.url} alt=""/>
            <a href={props.gif.url}>Link to GIPHY</a>
        </div>
    )

}