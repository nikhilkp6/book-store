import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product"></Tab>
            <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
