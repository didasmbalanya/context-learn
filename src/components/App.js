import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LangaugeContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const langs = {
  swahili: {
    label: "Jina",
    buttonText: "Wasilisha",
  },
  english: {
    label: "name",
    buttonText: "Submit",
  },
};
class App extends Component {
  state = {
    buttonText: "Submit",
    label: "Name",
  };
  onLanguageChange = (language) => {
    this.setState(langs[language]);
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag ke"
            onClick={() => this.onLanguageChange("swahili")}
          />
          <LangaugeContext.Provider value={this.state}>
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LangaugeContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
