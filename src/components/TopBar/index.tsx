import React from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 32px;
  margin: 16px 0;
  justify-content: space-between;
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <div className="logo">Playground</div>
      </Link>
      <nav>
        <ButtonLink to="/child/add">Add child</ButtonLink>
        <ButtonLink to="/group/add">Add new group</ButtonLink>
      </nav>
    </Wrapper>
  );
};

export default TopBar;
