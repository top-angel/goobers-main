import React, { createContext, useContext, useState } from "react";

type Context = {
  setDialog: (dialog) => void;
};

const dialogContext = createContext<Context>({
  setDialog: () => {
    // pass
  },
});

export const DialogProvider: React.FC = ({ children }) => {
  const [dialog, setDialog] = useState();

  return (
    <dialogContext.Provider value={{ setDialog }}>
      {dialog}
      {children}
    </dialogContext.Provider>
  );
};

export const useDialog = (): Context => useContext(dialogContext);
