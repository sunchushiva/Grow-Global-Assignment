import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      padding={["15px 40px"]}
      flexDirection={"row"}
      justifyContent={["space-between"]}
      alignItems={["center"]}
      bg="white"
      boxShadow={["rgba(0, 0, 0, 0.16) 0px 1px 4px"]}
    >
      <Box>
        <Link to="/home">
          <Heading as="h1">Assignment</Heading>
        </Link>
      </Box>
      <Flex
        width={["15%"]}
        flexDirection={"row"}
        justifyContent={["space-between"]}
        alignItems={["center"]}
      >
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
