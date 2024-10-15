import React from "react";
import Table from "../Table";

const StudentItem = ({ lastName, firstName, course, birthDate, age }) => {
  return (
    <Table.Row className="student-item">
      <Table.Column>{lastName}</Table.Column>
      <Table.Column>{firstName}</Table.Column>
      <Table.Column>{course}</Table.Column>
      <Table.Column>{birthDate}</Table.Column>
      <Table.Column>{age}</Table.Column>
    </Table.Row>
  );
};

export default StudentItem;
