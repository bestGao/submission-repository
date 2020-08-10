import React from "react";

function Part({ name, num }) {
  return (
    <>
      <p>
        {name} {num}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      {props.data.map((item) => (
        <Part name={item.name} num={item.num} />
      ))}
    </>
  );
}

export default Content;
