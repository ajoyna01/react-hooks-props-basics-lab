import React from "react"

function Links(props) {
  //const { linkedin, github } = props
  console.log(props)
  return (
    <div id="link">
      <h3 > Links:
     <a href = {props.gitHub}> {props.gitHub} </a>
      <a href = {props.linkedin}> {props.linkedin} </a>
      </h3>
    </div>
  );
}

export default Links
