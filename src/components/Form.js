import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  useColorModeValue,
  Textarea,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Box
      bg={useColorModeValue("white", "bgForm")}
      color={useColorModeValue("textColorLight", "textColorDark")}
      boxSizing="border-box"
      border="0.5px"
      borderColor={useColorModeValue("borderLight", "borderDark")}
      borderStyle="solid"
      borderRadius="23px"
      padding="46px"
      alignSelf={{ base: "center", sm: "center", xl: "start" }}
      boxShadow={useColorModeValue(
        "4px 8px 18px rgba(217, 217, 217, 0.25)",
        "none"
      )}
      width={{ base: "90%", sm: "90%", xl: "51%" }}
    >
      <form>
        <FormControl
          as="fieldset"
          width={{ base: "100%", sm: "100%", xl: "50%" }}
        >
          <RadioGroup defaultValue="professional">
            <Stack
              spacing={{ base: "16px", xl: "24px" }}
              mb={5}
              direction={{ base: "column", sm: "row" }}
            >
              <Radio size="sm" value="professional">
                Professional
              </Radio>
              <Radio size="sm" value="student">
                Student
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Stack
          spacing={{ base: "16px", xl: "24px" }}
          mb={3}
          direction={{ base: "column", xl: "row" }}
        >
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input />
          </FormControl>
        </Stack>
        <Stack
          spacing={{ base: "16px", xl: "24px" }}
          mb={3}
          direction={{ base: "column", xl: "row" }}
        >
          <FormControl isRequired>
            <FormLabel>Business Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input />
          </FormControl>
        </Stack>
        <Stack
          spacing={{ base: "16px", xl: "24px" }}
          mb={3}
          direction={{ base: "column", xl: "row" }}
        >
          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input />
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel>Tell us about your project</FormLabel>
          <Textarea
            size="xs"
            resize="none"
            height="7.625rem"
            borderRadius="0.5rem"
          />
        </FormControl>
        <Box display="flex" mt="1.5rem">
          <Button backgroundColor="primary" color="#fff" size="md" padding={5}>
            SEND
          </Button>
          <Text padding={2} marginLeft="1rem">
            <sup style={{ fontSize: "1.1rem" }}>*</sup>required
          </Text>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
