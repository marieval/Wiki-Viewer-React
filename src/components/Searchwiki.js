import React, { Component } from "react";
import "./Searchwiki.css";

class Searchwiki extends Component {

    render() {
        return (
            <div className="Searchwiki">
                <h1>Wikipedia Viewer</h1>
                <form onSubmit={this.props.formSubmit}>
                    <input
                        type="search"
                        placeholder="Type text to search"
                        onChange={this.props.inputChange}
                        autoFocus
                    />
                    <button
                        className="btn btn--search"
                        type="submit"
                        onClick={this.props.formSubmit}
                    >Search</button>
                </form>

                <div>
                    <a href="https://en.wikipedia.org/wiki/Special:Random"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button
                            className="btn btn--random"
                            type="submit">Read a random article</button>
                    </a>
                </div>
            </div >
        )
    }
}

export default Searchwiki;