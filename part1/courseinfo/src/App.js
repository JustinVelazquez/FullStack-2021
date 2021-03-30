import React from 'react';

import Content from './Content.js';
import Header from './Header';
import Total from './Total';

const App = (props) => {
  const course = 'Half Stack application development';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  //   return (
  //     <div>
  //       <h1>{course}</h1>
  //       <p>
  //         {part1} {exercises1}
  //       </p>
  //       <p>
  //         {part2} {exercises2}
  //       </p>
  //       <p>
  //         {part3} {exercises3}
  //       </p>
  //       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  //     </div>
  //   );

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
