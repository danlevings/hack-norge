import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: grey;
`;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
