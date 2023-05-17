import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "../lib/firebase";
import { ReactNode, FC } from "react";

type providerProps = {
  children: ReactNode
}

export const Providers:FC<providerProps> = ({ children }) =>{ 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
