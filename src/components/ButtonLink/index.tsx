import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background: #d8d8d8;
  padding: 0 16px;
  line-height: 44px;
  height: 44px;
  border-radius: 100px;
  color: black;
  text-decoration: none;
  display: inline-block;
  margin-left: 8px;
  font-weight: 900;
  font-style: normal;
  font-family: Avenir;
  font-size: 17px;
`;

type ButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const Button = ({ to, children }: ButtonProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Button;
