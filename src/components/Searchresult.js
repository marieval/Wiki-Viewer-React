import React from "react";
import "./Searchresult.css";

const Searchresult = (props) => {
    return (
        <div className="Searchresult">
            <a href={`https://en.wikipedia.org/wiki/${props.title}`} target="_blank" rel="noopener noreferrer">
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: `${props.snippet}...` }}></p>
            </a>
        </div >
    )
}

export default Searchresult;

