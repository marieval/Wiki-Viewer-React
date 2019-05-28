import React, { Component } from "react";
import "./Searchwiki.css";

const Searchwiki = (props) => {
    return (
        <div className="Searchwiki">
            <h1>Wikipedia Viewer</h1>
            <form onSubmit={props.formSubmit}>
                <input
                    type="search"
                    placeholder="Type text to search"
                    onChange={props.inputChange}
                    autoFocus
                />
                <button
                    className="btn btn--search"
                    type="submit"
                    onClick={props.formSubmit}
                >Search</button>
            </form>

            <a href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
                rel="noopener noreferrer">
                <button
                    className="btn btn--random"
                    type="submit">Read a random article</button>
            </a>
        </div >
    )

} 

export default Searchwiki;