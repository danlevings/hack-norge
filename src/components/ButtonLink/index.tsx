import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background: #d8d8d8;
  padding: 8px 16px;
  border-radius: 100px;
  color: black;
  text-decoration: none;
`;

type ButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const Button = ({ to, children }: ButtonProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Button;
