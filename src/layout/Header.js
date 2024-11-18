import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" fontWeight="bold" variant="h5" flex={1}>
            وبلاگ فاطمه عارفی
          </Typography>
          <h1> فاطمه </h1>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
