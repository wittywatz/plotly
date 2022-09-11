import React from 'react';
import { Flex, Box, useMediaQuery, useColorMode } from '@chakra-ui/react';
import ThemeSelector from './ThemeSelector';
import LogoDark from '../assets/LogoDark.svg';
import Logo from '../assets/logo.svg';

const NavBar = () => {
  const { colorMode } = useColorMode();
  const [issmallerThan346px] = useMediaQuery('(max-width: 360px)');
  return (
    <Flex
      flex={1}
      align="center"
      justify={issmallerThan346px ? 'center' : 'space-between'}
      direction={issmallerThan346px ? 'column' : 'row'}
    >
      <Box padding=" 0 1rem 0 1rem" marginBottom="1rem">
        {colorMode == 'dark' ? <LogoDark /> : <Logo />}
      </Box>
      <Box padding=" 0 1rem 0 1rem" marginBottom="1rem">
        <ThemeSelector />
      </Box>
    </Flex>
  );
};

export default NavBar;
