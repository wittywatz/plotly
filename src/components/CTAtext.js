import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

const CTAtext = () => {
  const color = useColorModeValue('textColorLight', 'textColorDark');
  return (
    <Box
      width={{ base: '90%', sm: '90%', xl: '47%' }}
      fontFamily="Roboto, sans-serif"
      alignSelf={{ base: 'center', sm: 'center', xl: 'start' }}
    >
      <Heading data-testid="heading" mt={4} mb={4} size="2xl">
        See Dash in Action.
      </Heading>
      <Text data-testid="heading-2" fontSize="2xl" fontWeight="bold">
        Thank you for your interest in Dash Enterprise.
      </Text>
      <Text data-testid="heading-3" fontSize="2xl" fontWeight="bold" mb={4}>
        We&apos;ll be in touch soon to schedule a demo.
      </Text>
      <UnorderedList spacing={5} paddingBottom="1rem">
        {[1, 2, 3].map((_, index) => {
          return (
            <ListItem key={index} color="primary">
              <Text data-testid="cta-list" color={color}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates numquam laborum ex reprehenderit suscipit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                numquam laborum ex reprehenderit suscipit.
              </Text>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default CTAtext;
