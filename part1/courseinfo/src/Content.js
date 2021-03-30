import React from 'react';
import Part from './Part';

const Content = (props) => {
  //   const part1 = 'Fundamentals of React';
  //   const exercises1 = 10;
  //   const part2 = 'Using props to pass data';
  //   const exercises2 = 7;
  //   const part3 = 'State of a component';
  //   const exercises3 = 14;
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

export default Content;
