import React from "react";
import Table from "../../components/Table";

const TeacherList = () => {
  const keys = [
    { title: "Name", key: "name" },
    { title: "Assigned group", key: "group" },
    { title: "Partner teachers", key: "partnerTeachers" },
    { title: "Children count", key: "childrenCount" }
  ];

  const data = [
    {
      name: "Todd",
      group: "Stardust",
      partnerTeachers: "Maria",
      childrenCount: "5"
    }
  ];

  return (
    <>
      <h1>Teachers</h1>
      <Table keys={keys} data={data} />
    </>
  );
};

export default TeacherList;
