import React, { createContext, useContext, useState } from 'react';

export const CountContext = createContext({});
const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const { children } = props;
  return (
    <CountContext.Provider
      value={{ count, setCount, totalQuestion, setTotalQuestion }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
