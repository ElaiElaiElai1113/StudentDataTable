import React from "react";
import Table from "../Table";
import "/src/index.css";

const StudentItem = ({ lastName, firstName, course, birthDate, age }) => {
  return (
    <Table.Row className="student-item">
      <Table.Column className="columnItem">{lastName}</Table.Column>
      <Table.Column className="columnItem">{firstName}</Table.Column>
      <Table.Column className="columnItem">{course}</Table.Column>
      <Table.Column className="columnItem">{birthDate}</Table.Column>
      <Table.Column className="columnItem">{age}</Table.Column>
    </Table.Row>
  );
};

export default StudentItem;
