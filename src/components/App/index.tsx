import React from "react";
import Routes from "../Routes";
import useLogin from "../../hooks/useLogin";
import Authenticating from "../Authenticating";
import AppProviders from "../AppProviders";
import configureStore from "../../store";
import TopBar from "../TopBar";

const App = () => {
  const { isAuthenticated, authenticating } = useLogin();
  const store = configureStore({});
  if (!isAuthenticated) {
    return <>Login screel</>;
  }

  if (authenticating) {
    return <Authenticating />;
  }

  return (
    <AppProviders store={store}>
      <TopBar />
      <Routes />
    </AppProviders>
  );
};

export default App;
