import React, { ReactNode, useState } from "react";

const Context = React.createContext({
  totalMoney: 89914,
  totalBackers: 5007,
  incrementTotal: (pledge: number) => {},
});

let backers = 5007;

type Props = {
  children: ReactNode;
};

function ContextProvider(props: Props) {
  const [total, setTotal] = useState(89914);

  const incrementTotalHandler = (pledge: number) => {
    setTotal((state) => state + pledge);
    backers++;
  };

  return (
    <Context.Provider
      value={{
        totalMoney: total,
        totalBackers: backers,
        incrementTotal: incrementTotalHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
