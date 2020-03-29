import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 32px;
  margin: 16px 0;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  .logo {
    font-weight: 900;
    font-style: normal;
    font-family: Avenir;
    font-size: 24px;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 0.01em;
  }
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <div className="logo">Playground</div>
      </Link>
      <nav>
        <ButtonLink to="/child/add">+ Add child</ButtonLink>
        <ButtonLink to="/teacher/add">+ Add teacher</ButtonLink>
        <ButtonLink to="/activity/add">+ Add activity</ButtonLink>
        <ButtonLink to="/group/add">+ Add new group</ButtonLink>
      </nav>
    </Wrapper>
  );
};

export default TopBar;
