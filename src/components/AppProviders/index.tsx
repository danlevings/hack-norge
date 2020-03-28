import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import GloabalStyles from "../../styles/global";

type Props = {
  children: React.ReactNode;
  store: EnhancedStore;
};

const AppProviders = ({ store, children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GloabalStyles />
        {children}
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProviders;
