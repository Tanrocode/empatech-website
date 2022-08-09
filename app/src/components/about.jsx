import "../styles/about.scss";
import React from "react";
import Wrapper from "./Helpers/Wrapper";

export default function About(props) {
  const className = "page " + props.className;
  return (
    <Wrapper>
      <div className={className}>
        <div className="align-card">
          <h1 className="title"> {props.title}</h1>
          <span>{props.children}</span>
        </div>
      </div>
    </Wrapper>
  );
}
