import { GIF } from "../models/GIF";

export function Result(props: {gif: GIF}) {

    return (
        <div>
            <h2>{props.gif.title}</h2>
            <img src={props.gif.images.url} alt=""/>
            <a href={props.gif.url}>Link to GIPHY</a>
        </div>
    )

}