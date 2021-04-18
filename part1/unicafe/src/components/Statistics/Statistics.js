import React from 'react';
import Statistic from './Statistic/Statistic';

const Statistics = (props) => {
  /// ...
  return (
    <div>
      <Statistic text="good" count={props.goodCount}/>
      <br />
      <Statistic text="neutral" count={props.badCount} />
      <br />
      <Statistic text="bad" count={props.neutralCount}/>
      <br />
      <Statistic text="total" count={props.neutralCount + props.goodCount + props.badCount }/>
    </div>
  );
};

export default Statistics;
