import React from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import "froala-editor/js/froala_editor.pkgd.min.js";

import "froala-editor/css/froala_editor.pkgd.min.css";

import "froala-editor/css/froala_style.min.css";

import FroalaEditor from "react-froala-wysiwyg";
class App extends React.Component {
  componentDidMount() {}

  render() {
    let editor = $.FroalaEditor;
    console.log("editor is", editor);
    return <FroalaEditor tag="textarea" />;
  }
}

export default App;
