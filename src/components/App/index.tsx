import React from "react";
import Routes from "../Routes";
import useLogin from "../../hooks/useLogin";
import Authenticating from "../Authenticating";
import AppProviders from "../AppProviders";
import configureStore from "../../store";
import TopBar from "../TopBar";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

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
      <Layout>
        <TopBar />
        <Routes />
      </Layout>
    </AppProviders>
  );
};

export default App;
