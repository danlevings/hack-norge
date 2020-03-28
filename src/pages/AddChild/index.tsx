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
        <h1>Add child</h1>
      </div>
      <div className="cols">
        <div>
          <Input
            name="Full name"
            value={childData.name}
            onChange={next => handleOnChange("name", next)}
          />
          <Input
            name="Assign to group"
            value={childData.group}
            onChange={next => handleOnChange("group", next)}
          />
          <Input
            name="Mother"
            value={childData.mother.name}
            onChange={next =>
              handleOnChange("mother", { ...childData.mother, name: next })
            }
          />
          <Input
            name="Mother number"
            value={childData.mother.number}
            onChange={next =>
              handleOnChange("mother", { ...childData.mother, number: next })
            }
          />
        </div>
        <div>
          <Input
            name="Age"
            value={childData.age}
            onChange={next => handleOnChange("age", next)}
          />
          <Input
            name="Child number"
            value={childData.number}
            onChange={next => handleOnChange("numnber", next)}
          />
          <Input
            name="Father"
            value={childData.father.name}
            onChange={next =>
              handleOnChange("father", { ...childData.father, name: next })
            }
          />
          <Input
            name="Father number"
            value={childData.father.number}
            onChange={next =>
              handleOnChange("father", { ...childData.father, number: next })
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default AddChild;
