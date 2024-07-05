import React from "react";
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(<h1>Ahmed</h1>)
/* 
JSX is a special syntax for React that makes it easier to represent your UI
JSX looks similar to HTML but it is not HTML
JSX code you write gets transformed into React.createElement
JSX is not part of your browser. You need a tool to transform it into valid JavaScript.
*/

//const title = <h1 id="brand-title" className="primary">Supermarket</h1>
/* 
Attributes in JSX get passed as the 2nd argument of React.createElement(...)
<div className="active"></div> is how you would give the class active to this element.
You need quotes around attribute values that are strings.

*/
/*
function getTitle(is_open) {
  if (is_open) {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket");
  } else {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket (closed)");
  }
};

A JSX element is an object.
you can treat a JSX element like an object.
you can assign a JSX element to a variable.
you can return a JSX element from a function.
Chapter Recap
JSX is a special syntax for React that makes it easier to represent your UI.
JSX looks similar to HTML but it is not HTML.
JSX code you write gets transformed into React.createElement.
JSX is not part of your browser. You need a tool to transform it into valid JavaScript.
A JSX element is an object.
you can treat a JSX element like an object.
you can assign a JSX element to a variable.
you can return a JSX element from a function.
*/
