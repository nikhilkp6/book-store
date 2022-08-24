import { Tile } from "@carbon/react";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Book.scss";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3005/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };
  return (
    <Tile>
      <div className="card">
        <article>By {author}</article>
        <h1>{name}</h1>
        <p> {description}</p>
        <h3>Rs {price}</h3>

        <Button
          size="sm"
          LinkComponent={Link}
          to={`/books/${_id}`}
          sx={{ mt: "auto" }}
          className="updateButton"
        >
          Update
        </Button>
        <Button
          kind="danger"
          size="sm"
          onClick={deleteHandler}
          sx={{ mt: "auto" }}
          className="deleteButton"
        >
          Delete
        </Button>
      </div>
    </Tile>
  );
};

export default Book;
