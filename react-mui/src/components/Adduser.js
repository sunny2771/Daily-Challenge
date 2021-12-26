import React, { useState } from "react";
import "../Cssfiles/Addcss.css";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
const initialValue = {
  name: "",
  work: "",
  email: "",
  phone: "",
};
const url = "http://127.0.0.1:3003/users";
const Adduser = () => {
  const [user, setUser] = useState(initialValue);
  const [name, setName] = useState([]);
  const [work, setWork] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);

  return (
    <div>
      <Typography id="form0">Add User</Typography>
      <FormGroup id="form1">
        <FormControl id="form2">
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="form2">
          <InputLabel>Work</InputLabel>
          <Input
            type="text"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </FormControl>
        <FormControl id="form2">
          <InputLabel>Email</InputLabel>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="form2">
          <InputLabel>Phone</InputLabel>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>

        <Button
          variant="contained"
          id="btn"
          type="submit"
          onClick={async () => {
            const response = await fetch(url, {
              method: "POST",
              body: JSON.stringify({
                name: name,
                work: work,
                email: email,
                phone: phone,
              }),
              headers: {
                "Content-type": "application/json",
              },
            });
            const data = await response.json();
            // setUser([...user, data]);
            setUser(data);
          }}
        >
          Submit
        </Button>
      </FormGroup>
    </div>
  );
};

export default Adduser;
