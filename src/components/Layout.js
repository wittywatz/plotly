import React from "react";
import Navbar from "./NavBar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box padding="2rem">
      <Navbar />
      <Box padding=" 0 1rem 0 1rem" width="full">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
