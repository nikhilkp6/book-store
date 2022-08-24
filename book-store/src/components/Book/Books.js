import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.scss";
import {
  Table,
  TableHead,
  TableRow,
  Toggle,
  TableBody,
  TableHeader,
  Row,
  TableCell,
} from "@carbon/react";
const URL = "http://localhost:3005/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const ToggleItem = () => {
  return (
    <div className="ToggleButton">
      <Toggle
        labelText="show book details"
        labelA={<DataBook />}
        labelB={<Books />}
        //toggled={<Books />}
        defaultToggled
        id="toggle-1"
      />
    </div>
  );
};

export const DataBook = () => {
  const headers = ["id", "name", "author", "description", "price"];
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader id={header.key} key={header}>
              {header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map((row) => (
          <TableRow key={row.id}>
            {Object.keys(row)
              .filter((key) => key !== "id")
              .map((key) => {
                return <TableCell key={key}>{row[key]}</TableCell>;
              })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  //console.log(books);
  return (
    <ul>
      {books &&
        books.map((book, i) => (
          <li className="book" key={i}>
            <Book book={book} />
          </li>
        ))}
    </ul>
  );
};
//export default Books;
export default ToggleItem;
