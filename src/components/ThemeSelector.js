import React, { useState, useEffect } from 'react';
import {
  useColorMode,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SunIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import Light from '../assets/Light.svg';
import Dark from '../assets/Dark.svg';
import System from '../assets/System.svg';

const colorModeIcon = {
  Light: <SunIcon />,
  Dark: <MoonIcon />,
  System: <System />,
};

const ThemeSelector = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [value, setValue] = useState(
    `${colorMode[0].toUpperCase()}${colorMode.substring(1).toLowerCase()}`
  );

  useEffect(() => {
    setColorMode(value.toLowerCase());
  }, [setColorMode, value]);

  return (
    <Menu minWidth="6.25rem">
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            display={'flex'}
          >
            <Box display="flex">
              {colorModeIcon[value]} &nbsp;&nbsp;<p>{value}</p>
            </Box>
          </MenuButton>
          <MenuList maxWidth="6.25rem">
            <MenuItem
              data-testid="theme-menu-item"
              icon={<Light />}
              onClick={() => setValue('Light')}
            >
              Light
            </MenuItem>
            <MenuItem
              data-testid="theme-menu-item"
              icon={<Dark />}
              onClick={() => setValue('Dark')}
            >
              Dark
            </MenuItem>
            <MenuItem
              data-testid="theme-menu-item"
              icon={<System />}
              onClick={() => setValue('System')}
            >
              System
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default ThemeSelector;
