import React from 'react';

const Total = ({ course }) => {
  const courseParts = course.parts.map((part) => part.exercises);

  return <p>Number of exercises: {courseParts.reduce((a, c) => a + c)}</p>;
};

export default Total;
