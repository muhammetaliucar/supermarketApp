import React, { createContext, useState } from "react";

const MarketContext = createContext([]);

export const MarketProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <MarketContext.Provider value={{ data, setData }}>{children}</MarketContext.Provider>
  );
};

export default MarketContext;
