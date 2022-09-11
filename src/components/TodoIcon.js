import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const TodoIcon = () => {
  return (
    <Box
      width={{ base: '100%', sm: '100%', xl: '52%' }}
      data-testid="todo-icon"
    >
      <Image
        width="100%"
        objectFit="cover"
        src="https://i.ibb.co/yYnRgdK/image-2.png"
        alt="TodoIcon"
        border="0"
      />
    </Box>
  );
};

export default TodoIcon;
