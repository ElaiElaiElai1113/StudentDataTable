import React from "react";
import Table from "./Table";

const StudentTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader colspan="5">Last Name</Table.ColumnHeader>
            <Table.ColumnHeader colspan="5">First Name</Table.ColumnHeader>
            <Table.ColumnHeader colspan="5">Course</Table.ColumnHeader>
            <Table.ColumnHeader colspan="5">Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader colspan="5">Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>
        <Table.TBody>
          <Table.Row>
            <Table.Column>De Los Santos</Table.Column>
            <Table.Column>Elijah</Table.Column>
            <Table.Column>IS</Table.Column>
            <Table.Column>December 19, 2002</Table.Column>
            <Table.Column>22</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>De Los Santos</Table.Column>
            <Table.Column>Elijah</Table.Column>
            <Table.Column>IS</Table.Column>
            <Table.Column>December 19, 2002</Table.Column>
            <Table.Column>22</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>De Los Santos</Table.Column>
            <Table.Column>Elijah</Table.Column>
            <Table.Column>IS</Table.Column>
            <Table.Column>December 19, 2002</Table.Column>
            <Table.Column>22</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>De Los Santos</Table.Column>
            <Table.Column>Elijah</Table.Column>
            <Table.Column>IS</Table.Column>
            <Table.Column>December 19, 2002</Table.Column>
            <Table.Column>22</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>De Los Santos</Table.Column>
            <Table.Column>Elijah</Table.Column>
            <Table.Column>IS</Table.Column>
            <Table.Column>December 19, 2002</Table.Column>
            <Table.Column>22</Table.Column>
          </Table.Row>
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
