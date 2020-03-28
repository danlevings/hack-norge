import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

const Container = styled.div`
  background: #efefef;
  border-radius: 32px;
  padding: 32px;
  margin: 32px;

  .cols {
    display: flex;
  }
`;

const AddChild = () => {
  const [childData, setChildData] = useState({
    name: "Todd",
    group: "Stardust",
    age: "5",
    number: "+47123456",
    mother: {
      name: "Sigfried",
      number: "+471234567"
    },
    father: {
      name: "Sigfried",
      number: "+471234567"
    }
  });

  const handleOnChange = (key: string, value: any) => {
    setChildData({
      ...childData,
      [key]: value
    });
  };

  return (
    <Container>
      <div>
        <h1>Add group</h1>
      </div>
      <div className="cols">
        <div>
          <Input
            name="Name"
            value={childData.name}
            onChange={next => handleOnChange("name", next)}
          />
        </div>
      </div>
    </Container>
  );
};

export default AddChild;
