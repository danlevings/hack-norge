import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div``;

type InputProps = {
  name: string;
  value: string;
  onChange: (nextValue: string) => void;
};

const Input = ({ name, value, onChange }: InputProps) => {
  return (
    <InputWrapper>
      <span>{name}</span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </InputWrapper>
  );
};

export default Input;
