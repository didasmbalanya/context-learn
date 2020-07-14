import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const { label } = this.context;
    return (
      <div className="ui field">
        <label>{label}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
