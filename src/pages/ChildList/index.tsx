import React from "react";
import Table from "../../components/Table";

const ChildList = () => {
  const keys = [
    { title: "Name", key: "name" },
    { title: "Group", key: "group" },
    { title: "Teacher", key: "teacher" },
    { title: "Age", key: "age" },
    { title: "Parent phone", key: "parentPhone" }
  ];

  const data = [
    {
      name: "Todd",
      group: "Stardust",
      teacher: "Maria",
      age: "5",
      parentPhone: "+47123456"
    }
  ];

  return (
    <>
      <h1>Children</h1>
      <Table keys={keys} data={data} />
    </>
  );
};

export default ChildList;
