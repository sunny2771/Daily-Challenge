import React, { useState, useEffect } from "react";
import "../Cssfiles/Allcss.css";
import axios from "axios";
import {
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@material-ui/core";

const url = "http://127.0.0.1:3003/users";

const Allusers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://127.0.0.1:3003/users/${id}`).then((response) => {
      console.log(response.data);
      getUsers();
    });
  };

  return (
    <>
      <Table id="table">
        <TableHead id="thead">
          <TableRow id="trow">
            <TableCell id="cell">Id</TableCell>
            <TableCell id="cell">Name</TableCell>
            <TableCell id="cell">Work</TableCell>
            <TableCell id="cell">Email</TableCell>
            <TableCell id="cell">Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell id="tcell">{user.id}</TableCell>
              <TableCell id="tcell">{user.name}</TableCell>
              <TableCell id="tcell">{user.work}</TableCell>
              <TableCell id="tcell">{user.email}</TableCell>
              <TableCell id="tcell">{user.phone}</TableCell>

              <Button id="btnd" onClick={() => deleteData(user.id)}>
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Allusers;
