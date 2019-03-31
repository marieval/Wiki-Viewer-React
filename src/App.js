import React, { Component } from 'react';
import './App.css';
import Searchwiki from "./components/Searchwiki";
import Searchresults from "./components/Searchresults";
import Footer from "./components/Footer";
import axios from "axios";

class App extends Component {
  state = {
    searchInput: "",
    searchResults: [],
    errorMessage: "",
    errorStyle: { display: "none" }
  }

  inputChangeHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: "",
      searchResults: [],
      errorStyle: { display: "none" }
    })

    console.log("state.searchInput: ", this.state.searchInput);
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchInput}&origin=*&format=json`)
      .then((wikiData) => {
        this.setState({
          searchResults: wikiData.data.query.search
        })
        console.log("searchResults: ", this.state.searchResults) // FUNGUJE

        if (this.state.searchResults.length === 0) {
          this.setState({
            errorMessage: `There were no results matching the query 
            "${this.state.searchInput}".`,
            errorStyle: { display: 'block' }
          })
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: ' Unable to load Wikipedia search results.',
          errorStyle: { display: 'block' }
        });
      });


  }

  render() {
    let newSearchresults = null;
    if (this.state.searchResults.length > 0) {
      console.log("render-searchResults > 0 !!!") // FUNGUJE
      newSearchresults = (
        <div>
          <Searchresults results={this.state.searchResults} />
        </div>
      )
    }

    return (
      <div className="App">   {/* display: flex, flex-direction: column */}
        <div className="SearchwikiPart">  {/* flex-grow: 1; */}
          <Searchwiki
            formSubmit={this.inputSubmitHandler}
            inputChange={this.inputChangeHandler}
          />
          <div
            className="errorMessage"
            style={this.state.errorStyle}
          >{this.state.errorMessage}
          </div>
        </div>
        {newSearchresults}
        <Footer />
      </div>
    )
  }
}

export default App;
