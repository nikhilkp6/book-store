import { Button, TextInput, TextArea, Modal } from "@carbon/react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onclosed = () => {
    history("/");
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:3005/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };
  return (
    <Modal
      open
      buttonTriggerText="Add book"
      primaryButtonText="Add"
      secondaryButtonText="Cancel"
      onRequestSubmit={handleSubmit}
      onSecondarySubmit={onclosed}
    >
      <Stack gap={1}>
        <TextInput
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          labelText="Name"
          placeholder="Name of book enter here"
        />
        <TextInput
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          labelText="Author"
          placeholder="name of author enter here"
        />
        <TextArea
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          labelText="Description"
          placeholder="few words about the book"
        />
        <TextInput
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          labelText="price"
          placeholder="enter the price of book here"
        />
      </Stack>
    </Modal>
  );
};
export default AddBook;
