import { Modal, TextInput, TextArea } from "@carbon/react";
import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3005/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);
  const onclosed = () => {
    history("/");
  };
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3005/books/${id}`, {
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
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Modal
      open
      buttonTriggerText="Update"
      primaryButtonText="Update"
      secondaryButtonText="Cancel"
      onRequestSubmit={handleSubmit}
      onSecondarySubmit={onclosed}
    >
      {inputs && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <Stack gap={1}>
            <TextInput
              labelText="Name"
              placeholder="Name of book enter here"
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
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
        </Box>
      )}
    </Modal>
  );
};
export default BookDetail;
